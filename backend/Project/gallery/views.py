from django.shortcuts import render

from .serializers import ImagesSerializer
from .models import Images
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

class ImagesList(generics.RetrieveAPIView):
    serializer_class = ImagesSerializer

    def get(self, request):
        queryset = Images.objects.all()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        image = request.data['image']
        name  = request.data['name']
        Images.objects.create(name=name, image=image)
        return Response({"message":"created"}, status=status.HTTP_201_CREATED)