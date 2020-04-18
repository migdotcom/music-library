from .models import Track
from rest_framework import serializers


# Serializer


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'

class DeepTrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'
        depth = 1
