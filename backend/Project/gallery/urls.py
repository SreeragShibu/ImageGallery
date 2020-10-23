from django.urls import include, path
from . import views

urlpatterns = [
    path('images/',
    views.ImagesList.as_view(), name="trial"),
]