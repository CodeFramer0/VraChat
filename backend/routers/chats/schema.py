from typing import Union,List
from datetime import date, datetime, time, timedelta
from pydantic import BaseModel, EmailStr, Field, SecretStr,JsonValue,Json,field_serializer
import locale







class ChatSchema(BaseModel):
    id: int
    user_id: int
    date: str
    history: dict
    
    

class ChatSchemaPost(BaseModel):
    user_id: int
    date: str
    history: Union[dict,None] = {}
    
   