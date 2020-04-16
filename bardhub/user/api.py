from .models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer
from . import views

# Lead ViewSet


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.filter()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer



class UserUpdate(viewsets.ModelViewSet):

    def get_queryset(self):
        queryset = User.objects.all();
        id = self.request.query_params.get('id', None)
        name = self.request.query_params.get('Display_name', None)
        if id is not None:
            #queryset = Album.objects.all().order_by('-Time_stamp')[:5]
            queryset = User.objects.filter(id=id).update(Display_name=name)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer




