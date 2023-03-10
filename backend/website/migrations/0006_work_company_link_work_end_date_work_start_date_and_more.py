# Generated by Django 4.1.5 on 2023-01-27 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0005_work'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='company_link',
            field=models.CharField(default=None, max_length=255),
        ),
        migrations.AddField(
            model_name='work',
            name='end_date',
            field=models.DateField(default=None),
        ),
        migrations.AddField(
            model_name='work',
            name='start_date',
            field=models.DateField(default=None),
        ),
        migrations.AlterField(
            model_name='project',
            name='project_link',
            field=models.CharField(default=None, max_length=255),
        ),
    ]
