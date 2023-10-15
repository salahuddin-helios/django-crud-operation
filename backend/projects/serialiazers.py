from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=200)
    class Meta:
        model = User
        fields = ['username', 'email','password']