import sys
sys.path.append('../album')
sys.path.append('../report')
from .models import User
from rest_framework import viewsets, permissions, generics
from album.models import Album
from .serializers import UserSerializer
from album.serializers import AlbumSerializer
from rest_framework.response import Response

# from report.serializers import ReportSerializer
from . import views
from django.db import connection
from django.db.models import Count
from django.forms.models import model_to_dict

class UserViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = User.objects.all()
        username = self.request.query_params.get('username')
        if username is not None: #queryset = Album.objects.all().order_by('-Time_stamp')[: 5]
            queryset = User.objects.filter(username = username)
        return queryset
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer

class UserTotalPlaycount(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        print(request.query_params)
        username = request.query_params.get('username')
        with connection.cursor() as cursor:
            cursor.execute("SELECT id FROM user_user WHERE username = %s", [username])
            user_id = cursor.fetchone()
            if(user_id):
                cursor.execute("SELECT SUM(COUNT) FROM album_album WHERE User_id IN ( SELECT id FROM user_user WHERE username = %s )", [username] )
                result = cursor.fetchone()[0]
                print(result)
                if(not result):
                    result = 0
                return Response({"userTotalPlaycount": result})
            else:
                return Response({"userTotalPlaycount": "User Not Found"})
    permission_classes = [  
        permissions.AllowAny ]
"""
Ryan + Nicholas Original Code    
class UserTotalPlaycount(generics.GenericAPIView):
    def get(self, request, *args, **kwargs):
        user_id = request.user.id
        with connection.cursor() as cursor:
            cursor.execute("SELECT SUM(COUNT) FROM album_album WHERE (User_id = %s )", [user_id] )
            result = cursor.fetchone()
            
        return Response({"userTotalPlaycount": result})
    permission_classes = [  
        permissions.IsAuthenticated ]
""" 
def dfetchone(cursor):
    columns = [col[0] for col in cursor.description]
    return dict(zip(columns, cursor.fetchone()))

def dfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

class AddFollower(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        # followed_user_id = request.data.get("id")
        user_id = request.user.id
        result_user = {}
        with connection.cursor() as cursor:
            cursor.execute("UPDATE user_user SET user_user.Followers = user_user.Followers + 1 WHERE user_user.id = %s", [user_id])
            cursor.execute("SELECT id, Followers FROM user_user WHERE user_user.id = %s", [user_id])
            result_user = dfetchone(cursor)
            # cursor.execute("INSERT INTO user_user_Followed (from_user_id, to_user_id) VALUES (%s, %s)", [user_id, followed_user_id])
        return Response({"user": result_user})
    permission_classes = [permissions.IsAuthenticated]

class CheatFollowers(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        user_id = request.user.id
        result_user = {}
        with connection.cursor() as cursor:
            cursor.execute("UPDATE user_user SET user_user.Followers = 50 WHERE user_user.id = %s", [user_id])
            cursor.execute("SELECT id, Followers FROM user_user WHERE user_user.id = %s", [user_id])
            result_user = dfetchone(cursor)
        return Response({"user": result_user})
    permission_classes = [permissions.IsAuthenticated]

class UserUpdate(viewsets.ViewSet):
    def update(self):
        queryset = User.objects.all()
        id = self.request.query_params.get('id', None)
        name = self.request.query_params.get('Display_name', None)
        if id is not None:
            #queryset = Album.objects.all().order_by('-Time_stamp')[:5]
            queryset = User.objects.filter(id=id).update(Display_name=name)
        return queryset
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer
