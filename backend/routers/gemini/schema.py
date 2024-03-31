
from typing import Union,List
from datetime import date, datetime, time, timedelta
from pydantic import BaseModel, EmailStr, Field, SecretStr,JsonValue,Json,field_serializer




class GeminiSchema(BaseModel):
    text:str
    history:dict
    