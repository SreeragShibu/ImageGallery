from django.shortcuts import render

from .serializers import (
    ImageCreateSerializer,
    ImageDetailsSerializer,
)

from .models import Images
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status


class ImagesList(generics.RetrieveAPIView):
    http_method_names = ['post','get']

    def get_serializer_class(self): 
        if self.request.method == 'POST':
            serializer_class = ImageCreateSerializer
            return serializer_class
        if self.request.method == 'GET':
            serializer_class = ImageDetailsSerializer
            return serializer_class
        assert self.serializer_class is not None, (
            "'%s' should either include a `serializer_class` attribute, "
            "or override the `get_serializer_class()` method."
            % self.__class__.__name__
        )

    def get(self, request):
        queryset = Images.objects.all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        # image = request.data['image']
        # name  = request.data['name']
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message":"created an image"}, status=status.HTTP_201_CREATED)