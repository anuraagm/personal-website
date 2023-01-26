from django.shortcuts import render
from .models import Post, Page
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly
from .serializers import PostSerializer, PageSerializer
from .models import Post, Page
# Create your views here.

def view_summernote(request):
    post_data = Post.objects.all().order_by('-id').first()
    context = {"form": post_data}
    return render(request, "index.html", context)

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

class PageView(viewsets.ModelViewSet):
    serializer_class = PageSerializer
    queryset = Page.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
