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