from .models import Track
from rest_framework import viewsets, permissions
from .serializers import TrackSerializer


class TrackViewSet(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer

class TracksOfAlbumsViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        queryset = Track.objects.all()
        id = self.request.query_params.get('id', None)
        if id is not None:
            queryset = Track.objects.filter(Album=id)
        return queryset
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer


class TrackOfUser(viewsets.ModelViewSet):
    queryset = Track.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TrackSerializer