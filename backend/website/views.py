from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticatedOrReadOnly
from .serializers import PostSerializer, PageSerializer, ProjectSerializer, TechnologySerializer, WorkSerializer
from .models import Post, Page, Project, Technology, Work
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

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

class TechnologyView(viewsets.ModelViewSet):
    serializer_class = TechnologySerializer
    queryset = Technology.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

class WorkView(viewsets.ModelViewSet):
    serializer_class = WorkSerializer
    queryset = Work.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]