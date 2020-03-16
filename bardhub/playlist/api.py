from playlist.models import Playlist
from rest_framework import viewsets, permissions
from .serializers import PlaylistSerializer

# Lead ViewSet


class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = PlaylistSerializer
