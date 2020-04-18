from .models import Track
from rest_framework import viewsets, permissions, generics, status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import TrackSerializer
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

# fecth helper
def dfetchone(cursor):
    columns = [col[0] for col in cursor.description]
    return dict(zip(columns, cursor.fetchone()))

def dfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]


# MakeTrack
class MakeTrack(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        print("request.data", request.data)
        print("this is user.id == ", request.user.id)
        mutable = request.POST._mutable
        request.POST._mutable = True
        request.data["Artist"] = request.user.id
        request.POST._mutable = mutable
        track_serializer = TrackSerializer(data=request.data, partial=True)
        if track_serializer.is_valid():
            track_serializer.save()
            print(track_serializer.data)
            return Response(track_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', track_serializer.errors)
            return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EditTrack(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        new_track_serializer = TrackSerializer(data=request.data)
        queryset = Track.objects.filter(id=new_track_serializer.data["id"], User=request.user);
        if queryset.exists():
            track_serializer = TrackSerializer(queryset, data=request.data, partial=True)
            if track_serializer.is_valid():
                track_serializer.save()
                return Response(track_serializer.data)
            else:
                print('error', track_serializer.errors)
                return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("Incorrect id, or invalid user")
            return Response({}, status=status.HTTP_400_BAD_REQUEST)
