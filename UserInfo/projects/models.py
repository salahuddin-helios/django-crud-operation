from django.db import models

# Create your models here.
class UserIformation(models.Model):
    name = models.CharField(max_length=200)
    number = models.CharField(max_length=200)

class MobileInformation(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    stock = models.IntegerField(null=True, blank=True)
    image = models.ImageField(upload_to="images")
    detail = models.TextField(max_length=400)

    def __str__(self):

        return self.name

#User product 
class Cart(models.Model):
    product = models.ForeignKey(MobileInformation,on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)