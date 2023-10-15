from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate

from rest_framework.generics import CreateAPIView
from .serialiazers import UserSerializer
from django.contrib.auth.models import User
# Create your views here.

@login_required
def home(request):
    return render(request,'registration/success.html')

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username = username, password = password)
            login(request, user)
            return redirect('/login/')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})



class UserRegister(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    