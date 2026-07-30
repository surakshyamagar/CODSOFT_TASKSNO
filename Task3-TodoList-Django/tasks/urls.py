from django.urls import path
from .views import TaskListCreateView, TaskDetailView, RegisterView

# AUTH
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # AUTHENTICATIOn
    path("register/", RegisterView.as_view(), name="register"),
    # Login
    path("login/", TokenObtainPairView.as_view(), name="login"),
    
    # Refresh JWT Token
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh",),
    
    # TASK APIs
    path("tasks/", TaskListCreateView.as_view(), name="task-list"),
    # int = integer, pk = primary key
    path("tasks/<int:pk>/", TaskDetailView.as_view(), name="task-detail"),
    
]