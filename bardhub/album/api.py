from .models import Album
from rest_framework import viewsets, permissions, serializers, generics
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
        """
        try:
            # get all field
            listField = Album._meta.fields
            listParams = []
            for i in range(len(listField)):
                tmpList = (str(listField[i])).split('.')
                listParams.append(str(tmpList[len(tmpList)-1]))
            print(listParams, "---heeeeeeeeeeeeeeeeeeeeeeee----")
        except:
            print("An exception occurred")
        """
        queryset = Album.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            print("ID in Albums: " + str(id))
           #queryset = Album.objects.all().order_by('-Time_stamp')[:5]
            queryset = Album.objects.filter(User=id)
            return queryset
        else:
            queryset = Album.objects.none()
            return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer


# AlbumNewestViewSet

class AlbumNewestViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all().order_by('-Time_stamp')[:5]
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer
    
class AlbumsFromPastMonth(viewsets.ModelViewSet):
    #in MySQL: 
    #queryset = Album.objects.raw('SELECT * FROM album_album WHERE Time_stamp BETWEEN date_sub(now(), interval 1 month) AND date_add(now(), interval 1 day');
    #in sqlite:
    def get_queryset(self):
        queryset = Album.objects.raw("SELECT * FROM album_album WHERE Time_stamp BETWEEN date('now','-1 month') AND date('now','+1 day')");
        return queryset
    #We're gonna get this info and then on the front end summarize it into a single number, and explain to professor that getting it to work with our framework otherwise would be impossible to finish in our time limit
    permissions_classes = [  
        permissions.AllowAny ]
    serializer_class = AlbumSerializer
