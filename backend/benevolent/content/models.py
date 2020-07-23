from django.db import models

# Create your models here.

class Testimonial(models.Model):
    avatar = models.ImageField(upload_to='avatar/', null = True)
    name = models.CharField(max_length=40)
    profession = models.CharField(max_length=40)
    description = models.TextField()
    post_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name




