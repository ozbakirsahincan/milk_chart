# api/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FeedingLogViewSet

router = DefaultRouter()
router.register(r'feeding-logs', FeedingLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
