from album.models import Album
from rest_framework import viewsets, permissions
from .serializers import AlbumSerializer

# Album ViewSet


class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AlbumSerializer
