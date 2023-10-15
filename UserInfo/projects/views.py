from rest_framework import viewsets
from .serializers import UserInfoSerializer,MobileSerializer,CartSerializer,UserSerializer
from .models import UserIformation,MobileInformation,Cart
from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView,RetrieveAPIView,UpdateAPIView,ListCreateAPIView,RetrieveUpdateDestroyAPIView
from django.contrib.auth.models import User
#Authentication import
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
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

   
#User create
class UserCreateList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SingleUser(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'






#Authontication

class UserRegister(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class HomeView(APIView):
     
   permission_classes = (IsAuthenticated, )
   def get(self, request):
    content = {'message': 'Welcome to django'}
    return Response(content)
   
   class LogoutView(APIView):
     permission_classes = (IsAuthenticated,)
     def post(self, request):
          
          try:
               refresh_token = request.data["refresh_token"]
               token = refresh_token()
               token.blacklist()
               return Response(status=status.HTTP_205_RESET_CONTENT)
          except Exception as e:
               return Response(status=status.HTTP_400_BAD_REQUEST)
   