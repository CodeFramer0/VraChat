from routers import users
from database import engine,Base
from sqladmin import Admin,ModelView
from dispatcher import app
from .auth import authentication_backend
# from routers.chats.chats import ChatDb

admin = Admin(app,engine,authentication_backend=authentication_backend)



class UserAdmin(ModelView, model=users.User):
    name = "User"
    name_plural = "Users"
    icon = "fa-solid fa-chart-line"
    column_details_list = [users.User.id, users.User.phone]
    column_list = [users.User.id, users.User.email ,users.User.phone]



admin.add_view(UserAdmin)




