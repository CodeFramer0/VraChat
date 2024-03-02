from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import Session
from database import Base
from hashing import Hasher
from .schema import UserSchema




class UserDb(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True,autoincrement='auto') 
    email = Column(String)
    password = Column(String)
    phone = Column(String)



router = APIRouter(
    prefix="/users",
    tags=["users"],
    # dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)






@router.get("/")
async def read_users(response_model=UserSchema,db: Session = Depends(get_db)):
    return db.query(UserDb).all()


@router.post("/")
async def read_user(user:UserSchema,db: Session = Depends(get_db)):
    password = Hasher.get_password_hash(user.password)
    
    db_change = UserDb(
        email=user.email,
        password=password,
        phone=user.phone
        )
    
    db.add(db_change)
    db.commit()
    db.refresh(db_change)
    return db_change


