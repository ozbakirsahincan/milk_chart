# api/views.py

from rest_framework import viewsets
from .models import FeedingLog
from .serializers import FeedingLogSerializer

class FeedingLogViewSet(viewsets.ModelViewSet):
    queryset = FeedingLog.objects.all().order_by('-datetime')
    serializer_class = FeedingLogSerializer
