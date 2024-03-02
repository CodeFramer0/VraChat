from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DECIMAL
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Session
from database import Base
from pydantic import BaseModel






router = APIRouter(
    prefix="/chats",
    tags=["chats"],
    # dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)







