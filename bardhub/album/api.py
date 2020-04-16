from .models import Album
from rest_framework import viewsets, permissions, generics
from .serializers import AlbumSerializer
from django.db import connection
from rest_framework.response import Response

# Album ViewSet

class AlbumViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        #
        # Freaking hard to find this params passing method
        #
        queryset = Album.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = Album.objects.filter(User=id)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

class AlbumViewSetTracks(viewsets.ModelViewSet):
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        #
        # Freaking hard to find this params passing method
        #
        queryset = Album.objects.all()
        Name = self.request.query_params.get('Name', None)
        if id is not None:
            queryset = Album.objects.filter(Name=Name)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

class IncViewCount(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        album_id = request.data.get("id")
        with connection.cursor() as cursor:
            cursor.execute("UPDATE album_album SET album_album.Count = album_album.Count + 1 WHERE album_album.id = %s", [album_id])
            # response_data = list(Album.objects.raw("SELECT id, Count, Description FROM album_album WHERE album_album.id = %s", [album_id]))[0]
            return Response({})

class CheatViewCount(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        album_id = request.data.get("id")
        with connection.cursor() as cursor:
            cursor.execute("UPDATE album_album SET album_album.Count = 50 WHERE album_album.id = %s", [album_id])
            # response_data = list(Album.objects.raw("SELECT id, Count, Description FROM album_album WHERE album_album.id = %s", [album_id]))[0]
            return Response({})

# AlbumNewestViewSet
class AlbumNewestViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('-Time_stamp')[:5]
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer

# AlbumNewestViewSet
class AlbumNewestOneViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('-Time_stamp')[:1]
    permissions_classes = [
        permissions.AllowAny
    ]
    
class AlbumsFromPastMonth(viewsets.ModelViewSet):
    #in MySQL: 
    #queryset = Album.objects.raw('SELECT * FROM album_album WHERE Time_stamp BETWEEN date_sub(now(), interval 1 month) AND date_add(now(), interval 1 day');
    #in sqlite:
    def get_queryset(self):
        queryset = []
        # queryset = Album.objects.raw("SELECT * FROM album_album WHERE Time_stamp BETWEEN %s AND %s", [date('now','-1 month'), date('now','+1 day')]);
        return queryset
    #We're gonna get this info and then on the front end summarize it into a single number, and explain to professor that getting it to work with our framework otherwise would be impossible to finish in our time limit
    permissions_classes = [  
        permissions.AllowAny ]
    serializer_class = AlbumSerializer

