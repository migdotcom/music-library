import sys
sys.path.append('../album')
sys.path.append('../report')
from .models import User
from album.models import Album
from rest_framework import viewsets, permissions, serializers
from .serializers import UserSerializer
from album.serializers import AlbumSerializer
from report.serializers import ReportSerializer
from . import views
from django.db import connection
from django.db.models import Count

class UserViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = User.objects.all()
        username = self.request.query_params.get('username')
        print(username)
        if username is not None: #queryset = Album.objects.all().order_by('-Time_stamp')[: 5]
            queryset = User.objects.filter(username = username)
        return queryset
    permissions_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
   
class UserTotalPlaycount(viewsets.ModelViewSet):
    def get_queryset(self):
        user_id = self.request.query_params.get('user_id')
        #need to protect against SQL injection with the quotes in the future
        #"Chiptunes"
        # query = "SELECT SUM(Count) AS Result FROM album_album WHERE User_id=" +user_id
        # with connection.cursor() as cursor:
            # cursor.execute(query)
            # row = cursor.fetchone()
            # print("ROW IS:        ")
            # print(row)
            # print("TYPE OF ROW: ")
            # print(type(row))
            # newdict = {int(row[0]) }
        # return(newdict)
        #query = "SELECT * FROM album_album WHERE User_id=" +user_id
        #queryset = Album.objects.raw(query);
        queryset = Album.objects.filter(User = user_id).annotate(total_playcount=Count('Count'))
        return queryset
    #We're gonna get this info and then on the front end summarize it into a single number, and explain to professor that getting it to work with our framework otherwise would be impossible to finish in our time limit
    permissions_classes = [  
        permissions.AllowAny ]
    
    serializer_class = AlbumSerializer
    
