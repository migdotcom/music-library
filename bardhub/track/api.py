from track.models import Track
from rest_framework import viewsets, permissions
from .serializers import TrackSerializer


class TrackViewSet(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer

