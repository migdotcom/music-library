from rest_framework import routers
from .api import EventViewSet
from django.urls import path

router = routers.DefaultRouter()
router.register('api/events', EventViewSet, 'events')

urlpatterns = router.urls


