from django.contrib import admin
from .models import Chat,Message

@admin.register(Chat)
class ChatAdmin(admin.ModelAdmin):
    list_display = ['history']
    


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    pass

