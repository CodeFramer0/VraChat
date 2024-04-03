from pydantic import BaseModel,EmailStr


class UserSchema(BaseModel):
    id : int
    email: EmailStr
    password : str
    
class UserSchemaPost(BaseModel):
    email: EmailStr
    password : str
  
