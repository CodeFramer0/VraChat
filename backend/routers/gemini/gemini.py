from fastapi import APIRouter, Depends, HTTPException
from dependencies import get_db
from .schema import GeminiSchema
from sqlalchemy.orm import Session



import google.generativeai as genai

from django.views.decorators.http import condition



gemini_api_key = "AIzaSyAqPgcez9CgGV-S3ZPRqVnH7qubPReapos"
genai.configure(api_key=gemini_api_key)
model = genai.GenerativeModel('gemini-pro',safety_settings={
})
GEMINI_SAFETY_SETTINGS = {'HARM_CATEGORY_HARASSMENT': 'block_none',
                          'HARM_CATEGORY_HATE_SPEECH': 'block_none',
                          'HARM_CATEGORY_SEXUAL': 'block_none',
                          'HARM_CATEGORY_DANGEROUS_CONTENT': 'block_none'
                          }




router = APIRouter(
    prefix="/gemini",
    tags=["gemini"],
    # dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)


@router.post("/")
async def create_answer(answer:GeminiSchema,db: Session = Depends(get_db)):
    # content = model.start_chat()
    # response =  model.generate_content(answer.text)
    return "Ку"

