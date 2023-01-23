from django.contrib import admin
# Register your models here.
from .models import Blog


class WebsiteAdmin(admin.ModelAdmin):
    list_display = ('title', 'content')


admin.site.register(Blog, WebsiteAdmin)
