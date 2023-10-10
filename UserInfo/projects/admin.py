from django.contrib import admin
from .models import UserIformation
# Register your models here.
@admin.register(UserIformation)
class UserInfoAdmin(admin.ModelAdmin):
    list_display = ['id','name','number']