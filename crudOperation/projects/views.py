from django.shortcuts import render,get_object_or_404,HttpResponseRedirect,redirect
from .models import UserIformation
from  .forms import UserInfoForm
# Create your views here.
def create_view(request):
    context ={}

    form = UserInfoForm(request.POST or None)
    if form.is_valid():
        form.save()
    
    context['form'] = form
    return render(request, 'app/form.html', context)

def list_view(request):
     data = UserIformation.objects.all()
     return render(request, 'app/view.html',{'dataset':data})

def detail_view(request,id):
    data = UserIformation.objects.get(id = id)
    return render(request, 'app/detail.html',{'data':data})

def update_view(request, id):
    obj = get_object_or_404(UserIformation,id= id)
    form = UserInfoForm(request.POST or None,instance=obj)
    if form.is_valid():
        form.save()
    return render(request, 'app/update.html', {'form':form})

def delete_view(request,id):
    data = UserIformation.objects.get(pk=id)
    data.delete()
    return redirect('/view/')
