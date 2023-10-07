
from django.contrib import admin
from django.urls import path
from .views import create_view,list_view,detail_view,delete_view,update_view
urlpatterns = [
     path('', create_view),
    path('view/', list_view),
    path('view/detail/<id>/', detail_view),
    path('view/update/<id>/', update_view),
    path('view/delete/<id>/', delete_view),
]
