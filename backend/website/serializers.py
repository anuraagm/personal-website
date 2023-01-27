from rest_framework import serializers
from .models import Post, Page, Project, Technology, Work

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'content')

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('id', 'page_name', 'page_title', 'page_content')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'project_name', 'project_description', 'project_details', 'project_link')

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('id', 'technology_name')

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ('id', 'company_name', 'role', 'role_details', 'start_date', 'end_date', 'company_link')