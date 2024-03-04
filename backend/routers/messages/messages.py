from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DECIMAL,DateTime,Table,Date,Text,JSON
from sqlalchemy.orm import Session,relationship
from database import Base
from ..chats.chats import Chat


class Message(Base):
    __tablename__ = 'Messages'
    id = Column(Integer, primary_key=True,autoincrement='auto') 
    chat_id = Column(Integer, ForeignKey(Chat.id))
    chat = relationship('Chat', foreign_keys='Message.chat_id',single_parent=True)
    text = Column(Text)
    is_bot = Column(Boolean(name='is_bot'))
    
    def __str__(self):
        return f"Message: {self.chat}"



router = APIRouter(
    prefix="/messages",
    tags=["messages"],
    # dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)


@router.get("/")
async def read_messages(db: Session = Depends(get_db)):
    return db.query(Chat).all()


@router.get("/{id}")
async def read_message(id:int,db: Session = Depends(get_db)):
    chat =  db.query(Chat).filter(Chat.id==id).first()
    if chat is None:
        raise HTTPException(status_code=404)  
    return chat    