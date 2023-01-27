# Generated by Django 4.1.5 on 2023-01-27 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_page'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=255)),
                ('project_description', models.TextField()),
                ('project_details', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Technology',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('technology_name', models.CharField(max_length=255)),
            ],
        ),
    ]
