from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

schema_view = get_schema_view(
    openapi.Info(
        title="My API",
        default_version="v1",
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@myapi.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[AllowAny],
)

apiPrefix = "api/v1"

urlpatterns = [
    path("admin/", admin.site.urls),
    path(f"{apiPrefix}/employees/", include("employees.urls")),
    path(f"{apiPrefix}/users/", include("users.urls")),
    path(f"{apiPrefix}/departments/", include("departments.urls")),
    path(f"{apiPrefix}/login/", TokenObtainPairView.as_view(), name="login"),
    path(
        f"{apiPrefix}/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"
    ),
    path(f"{apiPrefix}/teams/", include("teams.urls")),
    path(f"{apiPrefix}/projects/", include("projects.urls")),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("swagger.json", schema_view.without_ui(cache_timeout=0), name="schema-json"),
]
