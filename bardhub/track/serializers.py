from .models import track
from rest_framework import serializers


# Serializer


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = track
        fields = '__all__'
