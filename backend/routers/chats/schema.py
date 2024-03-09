from typing import Union,List
from datetime import date, datetime, time, timedelta
from pydantic import BaseModel, EmailStr, Field, SecretStr,JsonValue,Json,field_serializer
import locale



# locale.setlocale(locale.LC_ALL, "ru") # the ru locale is installed



class ChatSchema(BaseModel):
    id: int
    user_id: int
    date: datetime
    history: dict
    
    @field_serializer('date')
    def serialize_date(self, dt: datetime, _info):
        return dt.strftime("%#d %B %H:%M")

class ChatSchemaPost(BaseModel):
    user_id: int
    date: datetime
    history: Union[dict,None] = {}
    
   