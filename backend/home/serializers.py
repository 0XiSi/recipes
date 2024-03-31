from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from rest_framework import serializers
from home.models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    author_username = serializers.SerializerMethodField()

    def validate_avatar(self, image):
        # 12MB
        MAX_FILE_SIZE = 5000000
        print(image.name)
        if image.size > MAX_FILE_SIZE:
            print(image.size)
            raise ValidationError("File size too big!")

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'ingredients', 'instructions', 'created_at', 'thumbnail', 'author',
                  'author_username']
        extra_kwargs = {'author': {'read_only': True}}

    def get_author_username(self, obj):
        author_id = obj.author.id
        author = User.objects.get(pk=author_id)
        return author.username


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate_password(self, value):
        validate_password(value)
        return value

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
