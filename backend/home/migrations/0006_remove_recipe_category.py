# Generated by Django 5.0.3 on 2024-03-29 19:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_remove_recipe_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='category',
        ),
    ]