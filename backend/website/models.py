from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    preview = models.TextField(blank=True, null=True)
    featured_image = models.ImageField(upload_to='', blank=True, null=True)

    def __str__(self):
        return self.title

class Page(models.Model):
    page_name = models.CharField(max_length=255)
    page_title = models.CharField(max_length=255)
    page_content = models.TextField()

    def __str__(self):
        return self.page_name

class Project(models.Model):
    project_name = models.CharField(max_length=255)
    project_description = models.TextField()
    project_details = models.TextField()
    project_link = models.CharField(max_length=255, default="", blank=True, null=True) 

    def __str__(self):
        return self.project_name

class Technology(models.Model):
    technology_name = models.CharField(max_length=255)
    
    def __str__(self):
        return self.technology_name

class Work(models.Model):
    company_name = models.CharField(max_length=255)
    role = models.CharField(max_length=255)
    role_details = models.TextField()
    start_date = models.DateField(default="", blank=True, null=True)
    end_date = models.DateField(default="", blank=True, null=True)
    company_link = models.CharField(max_length=255, default="", blank=True, null=True)

    def __str__(self):
        return self.company_name