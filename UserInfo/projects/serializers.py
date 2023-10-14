from rest_framework import serializers
from .models import UserIformation,MobileInformation,Cart

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserIformation
        fields = ['id', 'name', 'number']

class MobileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobileInformation
        fields = ['id', 'name','price', 'stock','image','detail','quantity']

class CartSerializer(serializers.ModelSerializer):
    products = MobileSerializer(source='product',read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'