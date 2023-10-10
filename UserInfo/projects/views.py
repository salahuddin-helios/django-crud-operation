from rest_framework import viewsets
from .serializers import UserInfoSerializer
from .models import UserIformation
from rest_framework.generics import ListAPIView,CreateAPIView,DestroyAPIView,RetrieveAPIView

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