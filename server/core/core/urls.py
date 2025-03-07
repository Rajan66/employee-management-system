from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

apiPrefix = "api/v1"

urlpatterns = [
    path("admin/", admin.site.urls),
    path(f"{apiPrefix}/employees/", include("employees.urls")),
    path(f"{apiPrefix}/users/", include("users.urls")),
    path(f"{apiPrefix}/departments/", include("departments.urls")),
    path(
        f"{apiPrefix}/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"
    ),
    path(
        f"{apiPrefix}/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"
    ),
]
