from django.contrib import admin
from .models import UserIformation,MobileInformation,Cart
# Register your models here.
@admin.register(UserIformation)
class UserInfoAdmin(admin.ModelAdmin):
    list_display = ['id','name','number']

@admin.register(MobileInformation)
class MobileAdmin(admin.ModelAdmin):
    list_display = ['id','name','price','image','detail']
@admin.register(Cart)
class ProductCart(admin.ModelAdmin):
    list_display = ['id', 'product']