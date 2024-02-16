from django.shortcuts import render, HttpResponse,redirect
from .forms import RegisterForm,LoginForm
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.authtoken.models import Token
from .models import Chat,Message


def index(request):
    if request.user.is_authenticated:
        return redirect('/cabinet/')
    else:
        return redirect('/login/')

 

def registration(request):
    if request.user.is_authenticated:
        return redirect("/cabinet/")
    else:
        if request.method == 'POST':
            user_form = RegisterForm(request.POST)
            if user_form.is_valid():
                email = request.POST['email']
                if User.objects.filter(username=email).first():
                      form = RegisterForm()
                      return render(request,'web_interface/reg.html',{
                'form':form,
                'errors':"Такой пользователь уже существует"
        })
                user = user_form.save(commit=False)
                user.set_password(user_form.cleaned_data['password1'])
                user.username = request.POST['email']
                user.email = request.POST['email']
                user.save()
                token, created = Token.objects.get_or_create(user=user)

       
                return render(request,'web_interface/cabinet.html',{})
            else:
                form = RegisterForm()
                return render(request,'web_interface/reg.html',{
                'form':form,
                'errors':user_form.errors.as_text()
        })

        else:
            form = RegisterForm()
            return render(request,'web_interface/reg.html',{
                'form':form,
        })




def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd['username'], password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/cabinet/')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request,'web_interface/login.html',{
        'form':form
    })

def cabinet(request,token = None,chat_id=None):
     
    user = request.user
    chats = Chat.objects.filter(user=user)
    if request.GET.get('chat_id'):
        chat_id = int(request.GET.get('chat_id'))
        active_chat = Chat.objects.get(id=chat_id)
    else:
        active_chat = Chat.objects.filter(user=user).last()  
    messages = Message.objects.filter(chat=active_chat).all()    

    if request.user.is_authenticated:
        token = Token.objects.filter(user=user).first()     
    return render(request,'web_interface/cabinet.html',{
        'user':user,
        'token':token,
        'chats':chats,
        'active_chat':active_chat,
        'messages':messages,
        })



