from rest_framework import routers
from .api import PlaylistViewSet

router = routers.DefaultRouter()
router.register('api/playlists', PlaylistViewSet, 'playlists')

urlpatterns = router.urls
