"""Serializers for the REST API."""

from __future__ import annotations

from typing import Any

from rest_framework import serializers


class HealthSerializer(serializers.Serializer[dict[str, Any]]):
    status = serializers.CharField(read_only=True)
    service = serializers.CharField(read_only=True)
    django_version = serializers.CharField(read_only=True)
    python_version = serializers.CharField(read_only=True)
