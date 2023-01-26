from django.contrib import admin

# Register your models here.
from django_summernote.admin import SummernoteModelAdmin

from .models import Post, Page

class PostAdmin(SummernoteModelAdmin):
    summernote_fields = ('content', )
    
admin.site.register(Post, PostAdmin)
admin.site.register(Page)