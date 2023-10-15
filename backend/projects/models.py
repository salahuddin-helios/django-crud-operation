from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserModel(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    password = models.EmailField()
    def __str__(self):
        return self.name