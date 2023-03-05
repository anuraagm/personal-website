from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin

from .models import Post, Page, Project, Technology, Work

# class PostAdmin(SummernoteModelAdmin):
#     summernote_fields = ('content', )
    
admin.site.register(Post)
admin.site.register(Page)
admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(Work)