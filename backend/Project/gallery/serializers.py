from rest_framework import serializers

from .models import Images

class ImageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = (
            'name',
            'image',
            'description',
        )


class ImageDetailsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Images
        fields = ('__all__')