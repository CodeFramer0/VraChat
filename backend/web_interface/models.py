from django.db import models
from django.contrib.auth.models import User
from picklefield.fields import PickledObjectField

class Chat(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    date = models.DateTimeField()
    history = PickledObjectField(editable=True,default = list)

    class Meta:
        verbose_name = "Чат"
        verbose_name_plural = "Чаты"


class Message(models.Model):
    chat = models.ForeignKey(Chat,on_delete=models.CASCADE)
    message = models.TextField()
    is_bot = models.BooleanField(default=False)
