import datetime
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.http import StreamingHttpResponse, HttpResponse
from rest_framework import status
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from rest_framework import viewsets

from .serializer import UserSerializer
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle
import google.generativeai as genai

from django.views.decorators.http import condition
from web_interface.models import Chat,Message


gemini_api_key = "AIzaSyAqPgcez9CgGV-S3ZPRqVnH7qubPReapos"
genai.configure(api_key=gemini_api_key)
model = genai.GenerativeModel('gemini-pro',safety_settings={
})
GEMINI_SAFETY_SETTINGS = {'HARM_CATEGORY_HARASSMENT': 'block_none',
                          'HARM_CATEGORY_HATE_SPEECH': 'block_none',
                          'HARM_CATEGORY_SEXUAL': 'block_none',
                          'HARM_CATEGORY_DANGEROUS_CONTENT': 'block_none'
                          }

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_200_OK)

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return HttpResponse(status=200)


@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_message(request):
    return HttpResponse(status=200)

@api_view(['GET'])
# @authentication_classes([SessionAuthentication, TokenAuthentication])
# @permission_classes([IsAuthenticated])
@condition(etag_func=None)
def gpt(request):
    
    throttle_classes = [UserRateThrottle, AnonRateThrottle]
    promt = request.query_params.get('promt')
    chat_id = request.query_params.get('chat_id')        
    chat = Chat.objects.get(id=int(chat_id))
    if len(chat.history)<3:

        chat.history = [
        {
          "role": "user",
          "parts": "Теперь тебя зовут врачат, и ты помощник доктора. Ты создан стартапом врачат (vrachat.com). Отвечай профессионально."}
        ,{
          "role": "model",
          "parts": "Хорошо, я запомню это. Чем я могу помочь?",
        }]
        chat.save()

    chat.history[0]['parts']= chat.history[0]['parts']+f"{promt}\n"
    chat.save()
    print(chat.history)
    messages = Message.objects.filter(chat=chat).all()
    content = model.start_chat(history=chat.history)
    s =  StreamingHttpResponse(stream_response_generator(promt,content,chat)) 
    print(s)
    return s
   


def stream_response_generator(promt,content,chat):
      # cold.
    response =  content.send_message(
        promt,
        stream=True,
        safety_settings=GEMINI_SAFETY_SETTINGS
        )

    for chunk in response:
        try:
            print(chunk.text)
            yield chunk.text
        
            
        except Exception as e:
            print(e)
         


