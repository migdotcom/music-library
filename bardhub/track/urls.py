from rest_framework import routers
from .api import TrackViewSet, TracksOfAlbumsViewSet, TrackOfUser

router = routers.DefaultRouter()
router.register('api/tracks', TrackViewSet, 'tracks')
router.register('api/tracks-album', TracksOfAlbumsViewSet, 'tracks of an album')
router.register('api/tracks-user', TrackOfUser, 'tracks of a user')

urlpatterns = router.urls