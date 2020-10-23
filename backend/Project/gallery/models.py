from django.db import models

class Images(models.Model):
    name = models.CharField(max_length=20,null=True)