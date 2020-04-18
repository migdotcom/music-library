from .models import Track
from rest_framework import viewsets, permissions, status
from .serializers import TrackSerializer
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from django.db import connection
from rest_framework.response import Response

class TrackViewSet(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer

class TracksOfAlbumsViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = Track.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = Track.objects.filter(Album=id)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer


class TrackOfUser(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer

class MakeTrack(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        request.data["Artist"] = request.user.id
        track_serializer = TrackSerializer(data=request.data)
        # album_data = album_serializer.data
        # album_data["User"] = request.user
        # album_serializer = AlbumSerializer(data=album_data)
        if request.data["Album"] and track_serializer.is_valid():
            track_serializer.save()
            print(track_serializer.data)
            return Response(track_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', track_serializer.errors)
            return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)