from typing import Union,List
from datetime import date, datetime, time, timedelta
from pydantic import BaseModel, EmailStr, Field, SecretStr,JsonValue


class MessageSchema(BaseModel):
    chat_id: int 
    chat: str
    text: str
    date: date
    datetime: datetime
    is_bot: bool