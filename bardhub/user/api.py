from user.models import User
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



