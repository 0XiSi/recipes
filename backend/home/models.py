from PIL import Image
from django.db import models
from django.contrib.auth.models import User


def crop_center(image, width, height):
    img_width, img_height = image.size
    left = (img_width - width) // 2
    top = (img_height - height) // 2
    right = (img_width + width) // 2
    bottom = (img_height + height) // 2
    return image.crop((left, top, right, bottom))


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipes')
    description = models.TextField(null=True, blank=True)
    ingredients = models.TextField()
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    thumbnail = models.ImageField(upload_to='images/')

    def save(
            self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.thumbnail.path)
        width, height = img.size
        img.thumbnail((500, 500), Image.LANCZOS)
        img = crop_center(img, 286, 180)
        img.save(self.thumbnail.path)

    def __str__(self):
        return self.title
