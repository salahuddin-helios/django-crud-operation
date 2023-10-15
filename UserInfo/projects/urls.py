
from django.urls import path
from . views import UserList,UserCreate,UserDestroy,UserDetail,UserUpdate,ListCreateProduct,DetailProduct,ListCreateCart,deleteCartItem,HomeView,UserCreateList,SingleUser,UserRegister
#authentications import
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from rest_framework.authtoken import views
urlpatterns = [
    path('list/',UserList.as_view()),
    path('create/',UserCreate.as_view()),
    path('delete/<int:id>/',UserDestroy.as_view()),
    path('details/<int:id>/',UserDetail.as_view()),
    path('update/<int:id>/',UserUpdate.as_view()),
    path('product/',ListCreateProduct.as_view()),
    path('product/<int:id>/',DetailProduct.as_view()),
    path('user-product/',ListCreateCart.as_view()),
    path('user-product/<int:id>/',deleteCartItem.as_view()),
    #authentication urls
       #jwt here
    path('token/',jwt_views.TokenObtainPairView.as_view(), name ='token_obtain_pair'),
    path('token/refresh/',jwt_views.TokenRefreshView.as_view(),name ='token_refresh'),
    path('home/',HomeView.as_view(), name ='home'),
    path('register/',UserRegister.as_view(), name ='register'),
]