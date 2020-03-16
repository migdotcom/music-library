from rest_framework import serializers
from .models import Tag

# Serializer


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'
