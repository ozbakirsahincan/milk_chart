# api/serializers.py
from rest_framework import serializers
from .models import FeedingLog

class FeedingLogSerializer(serializers.ModelSerializer):
    datetime = serializers.DateTimeField(format="%d.%m.%Y %H:%M")  # Özel format

    class Meta:
        model = FeedingLog
        fields = '__all__'
