from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()

    def __str__(self):
        return self.title

class Page(models.Model):
    page_name = models.CharField(max_length=255)
    page_title = models.CharField(max_length=255)
    page_content = models.TextField()

    def __str__(self):
        return self.page_name
