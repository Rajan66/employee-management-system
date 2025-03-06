from rest_framework.routers import DefaultRouter

from projects.views import ProjectViewSet

router = DefaultRouter()
router.register(r"projects", ProjectViewSet)

urlpatterns = router.urls
