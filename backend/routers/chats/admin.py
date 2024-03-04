from internal.admin import admin
from sqladmin import ModelView
from .chats import Chat
from ..users.users import User





class ChatAdmin(ModelView, model=Chat):
    name = "Chat"
    name_plural = "Chats"
    icon = "fa-solid fa-chart-line"
    column_list = [Chat.user,Chat.date]


    





admin.add_view(ChatAdmin)

