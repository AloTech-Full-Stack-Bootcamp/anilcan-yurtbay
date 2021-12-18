from django.contrib.auth.models import User
from main.models import Post, Comment, Like
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['content', 'author', 'created_at']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['post', 'user', 'content', 'created_at']

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['post', 'user', 'created_at']
