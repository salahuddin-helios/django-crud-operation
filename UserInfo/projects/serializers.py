from rest_framework import serializers
from .models import UserIformation

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserIformation
        fields = ['id', 'name', 'number']