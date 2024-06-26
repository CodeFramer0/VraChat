from typing import Union,List
from pydantic import BaseModel, EmailStr, Field, SecretStr,JsonValue


class MessageSchema(BaseModel):
    chat_id: int 
    chat: str
    text: str
    date: str
    is_bot: bool

class MessageSchemaPost(BaseModel):
    chat_id: int 
    text: str
    is_bot: bool    