"""Views for the REST API."""

from __future__ import annotations

import platform
from typing import Any

import django
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import HealthSerializer


class HealthCheckView(APIView):
    """Health check endpoint returning runtime metadata."""

    def get(self, request: Request, *args: Any, **kwargs: Any) -> Response:
        payload = {
            "status": "ok",
            "service": "demo-backend",
            "django_version": django.get_version(),
            "python_version": platform.python_version(),
        }
        serializer = HealthSerializer(payload)
        return Response(serializer.data)
