from django.db import models

def upload_path(instance, filename):
    return '/'.join([filename])

class Images(models.Model):
    name = models.CharField(max_length=20,null=True)
    image = models.ImageField(blank= True, null= True, upload_to=upload_path)