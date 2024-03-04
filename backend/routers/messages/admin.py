
from internal.admin import admin
from sqladmin import ModelView
from .messages import Message
from ..users.users import User

class MessageAdmin(ModelView, model=Message):
    name = "Message"
    name_plural = "Messages"
    icon = "fa-solid fa-chart-line"
    column_list = [Message.text,Message.is_bot]
    

admin.add_view(MessageAdmin)    