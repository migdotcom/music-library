from rest_framework import routers
from .api import tracksOfGenre
from django.urls import path

router = routers.DefaultRouter()

# urlpatterns = router.urls
urlpatterns = router.urls + [path('api/gettracksOfGenre', tracksOfGenre.as_view()),
							 ]

