from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DECIMAL,DateTime,Table,Date,Text,JSON,desc,asc
from sqlalchemy.orm import Session,relationship,load_only
from database import Base
from ..users.users import User
from .schema import ChatSchema,ChatSchemaPost



class Chat(Base):
    __tablename__ = 'Chats'

    id = Column(Integer, primary_key=True) 
    user_id = Column(Integer, ForeignKey(User.id))
    user = relationship('User', foreign_keys='Chat.user_id')
    date = Column(Text)
    history =  Column('history', JSON)
    
    def __str__(self):
        return f"Chat: {self.user} ({self.date})"
    
    class Config:
        orm_mode = True



    
router = APIRouter(
    prefix="/chats",
    tags=["chats"],
    # dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)


@router.get("/",response_model=list[ChatSchema])
async def read_chats(user_id:int = None,db: Session = Depends(get_db)):
    if user_id:
        return db.query(Chat).filter(Chat.user_id == user_id)
    chats =  db.query(Chat).all()
    if len(chats) == 0:
        raise HTTPException(status_code=404)
    
    return chats
    


    

@router.get("/{id}",response_model=ChatSchema)
async def read_chat(id:int,db: Session = Depends(get_db)):
    chat =  db.query(Chat).filter(Chat.id == id).one_or_none()
    if chat is None:
        raise HTTPException(status_code=404)  
    return chat




@router.post("/")
async def create_chat(chat:ChatSchemaPost,db: Session = Depends(get_db)):
    db_chat = Chat(
        user_id = chat.user_id,
        date = chat.date,
        history = chat.history
    )
    
    db.add(db_chat)
    db.commit()
    db.refresh(db_chat)
    return db_chat
    



