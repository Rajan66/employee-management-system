from django.urls import include, path
from rest_framework.routers import DefaultRouter

from departments.views import DepartmentViewSet

router = DefaultRouter()
router.register(r"", DepartmentViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
