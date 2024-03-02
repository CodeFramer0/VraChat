from dispatcher import app
from routers import users,chats
from database import engine,Base
from internal import views




Base.metadata.create_all(bind=engine)

app.include_router(users.router)
app.include_router(chats.router)







