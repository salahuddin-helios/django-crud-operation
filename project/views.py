from django.shortcuts import render,get_object_or_404,HttpResponseRedirect,redirect
from .models import GeeksModel
from  .forms import GeeksForm
# Create your views here.
def create_view(request):
    context ={}

    form = GeeksForm(request.POST or None)
    if form.is_valid():
        form.save()
    
    context['form'] = form
    return render(request, 'app/home.html', context)
def list_view(request):
     data = GeeksModel.objects.all()
     return render(request, 'app/view.html',{'dataset':data})

def detail_view(request,id):
    data = GeeksModel.objects.get(id = id)
    return render(request, 'app/detail.html',{'data':data})

# def update_view(request,id):
#     obj = get_object_or_404(GeeksModel,id= id)
#     form = GeeksForm(request.POST or None,instance=obj)
#     if form.is_valid():
#         form.save()
#         return HttpResponseRedirect('/'+id)

#     return render(request,'update.html',{'form':form})

def update_view(request, id):
    obj = get_object_or_404(GeeksModel,id= id)
    form = GeeksForm(request.POST or None,instance=obj)
    if form.is_valid():
        form.save()
    return render(request, 'app/update.html', {'form':form})

def delete_view(request,id):
    data = GeeksModel.objects.get(pk=id)
    data.delete()
    return redirect('/view/')
