from dispatcher import app
from routers import users,chats,messages,gemini
from database import engine,Base




Base.metadata.create_all(bind=engine)

app.include_router(users.router)
app.include_router(chats.router)
app.include_router(messages.router)
app.include_router(gemini.router)







