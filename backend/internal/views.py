from fastapi import Depends, FastAPI
from dependencies import get_token_header,get_db
from routers import users
from database import SessionLocal, engine,Base
from sqladmin import BaseView, Admin,expose,ModelView
from dispatcher import app
from .auth import authentication_backend,AdminAuth
from starlette.requests import Request

admin = Admin(app,engine,authentication_backend=authentication_backend)
Base.metadata.create_all(bind=engine)


class UserAdmin(ModelView, model=users.UserDb):
    name = "User"
    name_plural = "Users"
    icon = "fa-solid fa-chart-line"
    column_details_list = [users.UserDb.id, users.UserDb.phone]




admin.add_view(UserAdmin)



