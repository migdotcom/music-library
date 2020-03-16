from tag.models import Tag
from rest_framework import viewsets, permissions
from .serializers import TagSerializer

# Lead ViewSet


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = TagSerializer
