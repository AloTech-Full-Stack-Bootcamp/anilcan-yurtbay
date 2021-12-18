from django.contrib.auth.models import User
from django.db.models import query
from main.models import Post, Comment, Like
from rest_framework import viewsets
from main.serializers import UserSerializer, PostSerializer, LikeSerializer, CommentSerializer
from rest_framework.decorators import permission_classes, action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    # post/:id/like
    @action(detail=True, methods=['post'])
    def like(self, request, pk=None):
        post = self.get_object()
        user = request.user
        queryset = Like.objects.filter(post=post, user=user)

        if len(queryset)!=0:
            queryset.delete()
            return Response({"message":"deleted"})
        else:
            queryset.create(post=post, user=user)
            return Response({"message":"created"})

class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [IsAuthenticated]


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
