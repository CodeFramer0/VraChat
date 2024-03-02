from django.contrib import admin
from .models import Chat,Message

@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    list_display = ['user','date','history']
    


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ['chat','message','is_bot']

