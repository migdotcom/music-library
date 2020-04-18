import sys
sys.path.append('../tag')
from .models import Track
from tag.models import Tag
from tag.serializers import TagSerializer
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
        data = request.data
        data["Artist"] = request.user.id
        tag_serial = None
        if(data.get("Genre")):
            tag_serial = TagSerializer(data={"Genre": data.get("Genre")}, partial=True)
            if(tag_serial.is_valid()):
                tag_serial.save()
                data["Tag"] = tag_serial.data["id"]
                data.pop("Genre")
            else:
                print('Invalid Genre error', track_serializer.errors)
                return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        track_serializer = TrackSerializer(data=request.data)
        if request.data["Album"] and track_serializer.is_valid():
            track_serializer.save()
            return Response(track_serializer.data, status=status.HTTP_201_CREATED)
        else:
            if(tag_serial):
                tag_serial.delete()
            print('error', track_serializer.errors)
            return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EditTrack(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        data = request.data
        queryset = Track.objects.filter(id=data.get("id"), Artist=request.user)
        if queryset.exists():
            if(data.get("Genre")):
                tag_serial = TagSerializer(data={"Genre": data.get("Genre")}, partial=True)
                if(tag_serial.is_valid()):
                    tag_serial.save()
                    data["Tag"] = tag_serial.data["id"]
                    data.pop("Genre")
                else:
                    print('Invalid Genre error', track_serializer.errors)
                    return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            track_serializer = TrackSerializer(queryset[0], data=data)
            if track_serializer.is_valid():
                track_serializer.save()
                return Response({track_serializer.data})
            else:
                print('error', track_serializer.errors)
                return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            print("Incorrect id, or invalid user")
            return Response({}, status=status.HTTP_400_BAD_REQUEST)