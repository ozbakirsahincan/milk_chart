# api/admin.py

from django.contrib import admin
from .models import FeedingLog

admin.site.register(FeedingLog)
