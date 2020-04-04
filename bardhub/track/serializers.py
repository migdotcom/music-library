from .models import Track
from rest_framework import serializers


# Serializer


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = '__all__'
