
from django.urls import path
from django.contrib.auth import views as auth_views
from .views import home, register, UserRegister,Home
#jwt here
from rest_framework_simplejwt import views as jwt_views
urlpatterns = [
    path('login/',auth_views.LoginView.as_view(), name='login'),
    path('logout/',auth_views.LogoutView.as_view(), name='logout'),
    path('home/',home, name='home'),
    path('register/',register, name='register'),
    path('create/',UserRegister.as_view(),),

]
