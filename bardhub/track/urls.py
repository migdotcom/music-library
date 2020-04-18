from rest_framework import routers
from .api import TrackViewSet, TracksOfAlbumsViewSet, TrackOfUser, MakeTrack, TrackNewest
from django.urls import path

router = routers.DefaultRouter()
router.register('api/tracks', TrackViewSet, 'tracks')
router.register('api/tracks-newest', TrackNewest, 'tracks')
router.register('api/tracks-album', TracksOfAlbumsViewSet, 'tracks of an album')
router.register('api/tracks-user', TrackOfUser, 'tracks of a user')

#router.register('api/tracks/create', MakeTrack.as_view(), 'create a track')

urlpatterns = router.urls + [path('api/maketrack', MakeTrack.as_view())]