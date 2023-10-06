from django.db import models

# Create your models here.
class GeeksModel(models.Model):
    name = models.CharField(max_length=200)
    number = models.CharField(max_length=200)

    def __str__(self):
        return self.name
    