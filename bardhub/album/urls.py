from rest_framework import routers
from .api import AlbumViewSet,AlbumNewestViewSet,AlbumsFromPastMonth

router = routers.DefaultRouter()
router.register('api/albums', AlbumViewSet, 'albums')
router.register('api/albums-newest', AlbumNewestViewSet, 'album_newest')
router.register('api/albums-pastmonth', AlbumsFromPastMonth, 'albums_pastmonth')
urlpatterns = router.urls
