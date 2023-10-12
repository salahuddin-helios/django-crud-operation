
from django.urls import path
from . views import UserList,UserCreate,UserDestroy,UserDetail,UserUpdate,ListCreateProduct,DetailProduct,ListCreateCart
urlpatterns = [
    path('list/',UserList.as_view()),
    path('create/',UserCreate.as_view()),
    path('delete/<int:id>/',UserDestroy.as_view()),
    path('details/<int:id>/',UserDetail.as_view()),
    path('update/<int:id>/',UserUpdate.as_view()),
    path('product/',ListCreateProduct.as_view()),
    path('product/<int:id>/',DetailProduct.as_view()),
    path('user-product/',ListCreateCart.as_view())
]