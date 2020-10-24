from django.db import models
import uuid

def upload_path(instance, filename):
    return '/'.join([filename])

class Images(models.Model):
    
    uuid = models.UUIDField(default=uuid.uuid4)
    name = models.CharField(max_length=20,null=True)
    image = models.ImageField(blank= True, null= True, upload_to=upload_path)
    description = models.TextField(blank = True, null= True)
    created_on = models.DateTimeField(auto_now_add=True)