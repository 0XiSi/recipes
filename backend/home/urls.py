from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.RecipeListCreate.as_view(), name='list-recipe'),
    path('recipes/<int:pk>/', views.RecipeDetailDelete.as_view(), name='detail-recipe')
]
