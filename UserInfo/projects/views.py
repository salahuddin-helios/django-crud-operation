from rest_framework import viewsets
from .serializers import UserInfoSerializer,MobileSerializer,CartSerializer
from .models import UserIformation,MobileInformation,Cart
from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView,RetrieveAPIView,UpdateAPIView,ListCreateAPIView,RetrieveUpdateDestroyAPIView

class UserList(ListAPIView):
    queryset = UserIformation.objects.all()
    serializer_class = UserInfoSerializer

class UserCreate(CreateAPIView):
    queryset = UserIformation.objects.all()
    serializer_class = UserInfoSerializer

class UserDestroy(DestroyAPIView):
    queryset = UserIformation.objects.all()
    serializer_class = UserInfoSerializer
    lookup_field = "id"

class UserDetail(RetrieveAPIView):
    queryset = UserIformation.objects.all()
    serializer_class = UserInfoSerializer
    lookup_field = "id"

class UserUpdate(UpdateAPIView):
    queryset = UserIformation.objects.all()
    serializer_class = UserInfoSerializer
    lookup_field = 'id'

    #product class here

class ListCreateProduct(ListCreateAPIView):
    queryset = MobileInformation.objects.all()
    serializer_class = MobileSerializer

class DetailProduct(RetrieveUpdateDestroyAPIView):
    queryset = MobileInformation.objects.all()
    serializer_class = MobileSerializer
    lookup_field = 'id'

    # add to cart
class ListCreateCart(ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

  # delete from cart
class deleteCartItem(RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    lookup_field = 'id'