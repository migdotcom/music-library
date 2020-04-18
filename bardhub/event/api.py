
from .models import Event
from rest_framework import viewsets, permissions, generics, status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import EventSerializer
from django.db import connection
from rest_framework.response import Response

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-Time_stamp')[:5]
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = EventSerializer