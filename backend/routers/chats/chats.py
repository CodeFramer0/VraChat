from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DECIMAL,DateTime,Table,Date,Text,JSON
from sqlalchemy.orm import Session,relationship
from database import Base
from ..users.users import User

class Chat(Base):
    __tablename__ = 'Chats'

    id = Column(Integer, primary_key=True,autoincrement='auto') 
    user_id = Column(Integer, ForeignKey(User.id))
    user = relationship('User', foreign_keys='Chat.user_id')
    date = Column(Date)
    history =  Column('history', JSON)
    
    def __str__(self):
        return f"Chat: {self.user} ({self.date})"



    
router = APIRouter(
    prefix="/chats",
    tags=["chats"],
    # dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)


@router.get("/")
async def read_chats(db: Session = Depends(get_db)):
    return db.query(Chat).all()


@router.get("/{id}")
async def read_chat(id:int,db: Session = Depends(get_db)):
    chat =  db.query(Chat).filter(Chat.id==id).first()
    if chat is None:
        raise HTTPException(status_code=404)  
    return chat




