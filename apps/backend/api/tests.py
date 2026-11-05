"""Tests for the REST API."""

from __future__ import annotations

from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient


def test_health_check_endpoint() -> None:
    client = APIClient()
    url = reverse("api:health")
    response = client.get(url)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert data["status"] == "ok"
    assert data["service"] == "demo-backend"
    assert "django_version" in data
    assert "python_version" in data
