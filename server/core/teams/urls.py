from rest_framework.routers import DefaultRouter

from teams.views import TeamViewSet

router = DefaultRouter()
router.register(r"teams", TeamViewSet)

urlpatterns = router.urls
