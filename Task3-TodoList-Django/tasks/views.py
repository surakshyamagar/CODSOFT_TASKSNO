from django.shortcuts import render
from rest_framework import generics
from .models import Task
from tasks.serializers import TaskSerializer

# AUTH IMPORTS
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated, AllowAny
from .user_serializers import RegisterSerializer

# Create your views(create/get(API)) here.
class TaskListCreateView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    # AUTH
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        queryset = Task.objects.filter(user=self.request.user)
        
        status = self.request.query_params.get("status")
        search = self.request.query_params.get("search")
        
        if status:
            queryset = queryset.filter(status__iexact=status)
            
        if search:
            queryset = queryset.filter(title__icontains=search)
            
        return queryset
    
    # AUTH
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)
    
    
# AUTHENTICATION VIEW
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]
     
     
    