"""URL routes for the api app."""

from __future__ import annotations

from django.urls import path

from api.views import HealthCheckView

app_name = "api"

urlpatterns = [
    path("health/", HealthCheckView.as_view(), name="health"),
]
