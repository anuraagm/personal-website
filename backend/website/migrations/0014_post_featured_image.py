# Generated by Django 4.1.7 on 2023-03-04 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("website", "0013_post_preview"),
    ]

    operations = [
        migrations.AddField(
            model_name="post",
            name="featured_image",
            field=models.ImageField(blank=True, null=True, upload_to="media"),
        ),
    ]
