from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import Session
from database import Base
from hashing import Hasher
from .schema import UserSchema,UserSchemaPost
from hashing import Hasher



class User(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True) 
    email = Column(String)
    password = Column(String)
    phone = Column(String)
    def __str__(self):
        return f"User: {self.email} ({self.phone})"



router = APIRouter(
    prefix="/users",
    tags=["users"],
    # dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)






# @router.get("/",response_model=list[UserSchema])
# async def read_users(db: Session = Depends(get_db)):
#     return db.query(User).all()


@router.get("/{id}",response_model=UserSchema)
async def read_user(id:int,db: Session = Depends(get_db)):
    user =  db.query(User).filter(User.id==id).first()
    if user is None:
        raise HTTPException(status_code=404)  
    return user

@router.get("/",response_model=UserSchema)
async def read_user_verif(email:str,password:str,db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    print(user)
    if user is None:
        raise HTTPException(status_code=404)  
    
    verify = Hasher.verify_password(plain_password=password,hashed_password=user.password)
    print(verify)
    if not verify:
        raise HTTPException(status_code=404) 
    
    return user

@router.post("/")
async def write_user(user:UserSchemaPost,db: Session = Depends(get_db)):
    res = db.query(User).filter(User.email == user.email).first()
    if res : raise HTTPException(status_code=409)  
    password = Hasher.get_password_hash(user.password)
    
    db_change = User(
        email=user.email,
        password=password,
        phone='123'
        )
    
    db.add(db_change)
    db.commit()
    db.refresh(db_change)
    return db_change.id


