from rest_framework import serializers
from .models import UserIformation,MobileInformation,Cart
from django.contrib.auth.models import User
from rest_framework import serializers
class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserIformation
        fields = ['id', 'name', 'number']

class MobileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobileInformation
        fields = ['id', 'name','price', 'stock','image','detail']

class CartSerializer(serializers.ModelSerializer):
    products = MobileSerializer(source='product',read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'


#create User 

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=200)
    class Meta:
        model = User
        fields = ['username', 'email','password']

    
    def create(self,validated_data):
        user= User(
            username= validated_data.get("username"),
            email= validated_data.get("email")
        )

        user.set_password(validated_data.get('password'))

        user.save()

        return user