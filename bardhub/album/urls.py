from rest_framework import routers
from .api import AlbumViewSet,AlbumNewestViewSet

router = routers.DefaultRouter()
router.register('api/albums', AlbumViewSet, 'albums')
router.register('api/albums-newest', AlbumNewestViewSet, 'album_newest')

urlpatterns = router.urls
