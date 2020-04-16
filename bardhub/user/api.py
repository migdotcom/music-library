from .models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from . import views

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
   
# class UserTotalPlaycount(viewsets.ModelViewSet):
    # def get_queryset(self):
        # #need to protect against SQL injection with the quotes in the future
        # query = "SELECT SUM(Count) FROM album_album WHERE id IN (SELECT id FROM user_user WHERE username=%s", username;
        # queryset = User.objects.raw("SELECT * FROM album_album WHERE Time_stamp BETWEEN date('now','-1 month') AND date('now','+1 day')");
        # return queryset
    # #We're gonna get this info and then on the front end summarize it into a single number, and explain to professor that getting it to work with our framework otherwise would be impossible to finish in our time limit
    # permissions_classes = [  
        # permissions.AllowAny ]
    # serializer_class = AlbumSerializer
