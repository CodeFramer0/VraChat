from django.conf import settings
from . import views
from django.urls import path
from django.conf.urls.static import static

urlpatterns = [
    path('',views.index,name='index'),
    path('registration/',views.registration,name='register'),
    path('login/',views.user_login,name='login'),
    path('cabinet/', views.cabinet, name='cabinet'),
    path('cabinet/<int:chat_id>/',views.cabinet_and_chat)
   
]
