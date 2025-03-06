from rest_framework.routers import DefaultRouter

from users.views import RoleViewSet, UserViewSet

router = DefaultRouter()
router.register(r"roles", RoleViewSet)
router.register(r"", UserViewSet)

urlpatterns = router.urls
