from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DECIMAL,DateTime,Table,Date,Text,JSON
from sqlalchemy.orm import Session,relationship
from database import Base
from ..chats.chats import Chat
from. schema import MessageSchema,MessageSchemaPost
import datetime
class Message(Base):
    __tablename__ = 'Messages'
    id = Column(Integer, primary_key=True,autoincrement='auto') 
    chat_id = Column(Integer, ForeignKey(Chat.id))
    # chat = relationship('Chat', foreign_keys='Message.chat_id',single_parent=True)
    text = Column(Text)
    date = Column(Date)
    datetime = Column(DateTime)
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
async def read_messages(chat_id:int = None,db: Session = Depends(get_db)):
    if chat_id:
        return db.query(Message).filter(Message.chat_id == chat_id).all()
    return db.query(Message).all()


@router.get("/{id}")
async def read_messages(chat_id:int,db: Session = Depends(get_db)):
    chat =  db.query(Message).filter(Message.chat_id==chat_id).all()
    if chat is None:
        raise HTTPException(status_code=404)  
    return chat

@router.post("/")
async def create_messages(message:MessageSchema,db: Session = Depends(get_db)):
    db_message = Message(
        chat_id = message.chat_id,
        text = message.text,
        date = message.date,
        datetime = message.datetime,
        is_bot = message.is_bot,
    )
    
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message