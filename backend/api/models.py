from django.db import models

class FeedingLog(models.Model):
    datetime = models.DateTimeField(null=True)  # Önemli: null=True geçici olarak şart
    pee = models.BooleanField(default=False)
    poop = models.BooleanField(default=False)
    made_milk = models.PositiveIntegerField()
    drank_milk = models.PositiveIntegerField()
    remaining_milk = models.PositiveIntegerField()
