from rest_framework import routers
from .api import TrackViewSet, TracksOfAlbumsViewSet, TrackOfUser, MakeTrack, EditTrack
from django.urls import path

router = routers.DefaultRouter()
router.register('api/tracks', TrackViewSet, 'tracks')
router.register('api/tracks-album', TracksOfAlbumsViewSet, 'tracks of an album')
router.register('api/tracks-user', TrackOfUser, 'tracks of a user')
#router.register('api/tracks/create', MakeTrack.as_view(), 'create a track')

urlpatterns = router.urls +[path('api/tracks/create', MakeTrack.as_view()),
							path('api/tracks_edit', EditTrack.as_view())]