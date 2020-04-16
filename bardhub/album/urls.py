from rest_framework import routers
from .api import AlbumViewSet,AlbumNewestViewSet, AlbumNewestOneViewSet, AlbumViewSetTracks, AlbumsFromPastMonth, IncViewCount, CheatViewCount
from django.urls import path

router = routers.DefaultRouter()
router.register('api/albums', AlbumViewSet, 'albums')
router.register('api/albums-newest', AlbumNewestViewSet, 'album_newest_top_5')
router.register('api/albums-newest-one', AlbumNewestOneViewSet, 'album_newest_top_1')
router.register('api/albums-name', AlbumViewSetTracks, 'album_newest_top_1')
router.register('api/albums-pastmonth', AlbumsFromPastMonth, 'albums_pastmonth')


urlpatterns = router.urls +[path('api/albums/inc-views', IncViewCount.as_view()),
							 path('api/albums/inc-views/cheat', CheatViewCount.as_view())]

