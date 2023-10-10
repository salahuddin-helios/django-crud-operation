
from django.urls import path
from . views import UserList,UserCreate,UserDestroy,UserDetail,UserUpdate
urlpatterns = [
    path('list/',UserList.as_view()),
    path('create/',UserCreate.as_view()),
    path('delete/<int:id>/',UserDestroy.as_view()),
    path('details/<int:id>/',UserDetail.as_view()),
    path('update/<int:id>/',UserUpdate.as_view()),
]
