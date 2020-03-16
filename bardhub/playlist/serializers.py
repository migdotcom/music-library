from rest_framework import serializers
from .models import Playlist

# Serializer


class PlaylistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playlist
        fields = '__all__'
