from io import BytesIO

from PIL import Image
from django.contrib.auth.models import User
from django.core.files.base import ContentFile
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from home.models import Recipe
from home.serializers import UserSerializer, RecipeSerializer


class RecipeListCreate(generics.ListCreateAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    queryset = Recipe.objects.all()
    # print(queryset)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class RecipeDetailDelete(generics.RetrieveDestroyAPIView):
    serializer_class = RecipeSerializer
    permission_classes = [IsAuthenticated]
    queryset = Recipe.objects.all()

    # def get_queryset(self):
    #     user = self.request.user
    #     return Recipe.objects.filter(author=user)

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]



