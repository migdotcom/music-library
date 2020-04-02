from track.models import track
from rest_framework import viewsets, permissions
from .serializers import TrackSerializer

# Track ViewSet


class TrackViewSet(viewsets.ModelViewSet):
    queryset = track.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer
