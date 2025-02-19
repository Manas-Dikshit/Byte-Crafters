from django.contrib import admin
from django.urls import path
from home import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.index, name="index"),
    path('mental-health/', views.mentalHealth, name="mental-health"),
    path('nutritionist/', views.nutritionist, name="nutritionist"),
    path("chatbot/", views.chatbot, name="chatbot"),
    path("team/", views.team, name="team"),
    path("nutritionist/calorie/", views.calorie, name="calorie"),
    path("nutritionist/diet-recipe/", views.diet, name="diet-recipe"),
    path("nutritionist/gen-recipe/", views.recipe, name="recipe"),
    path("nutritionist/gen-diet/", views.diet_plan, name="diet_plan"),
    path("features/", views.features, name="features"),
    # path('sem/<int:sem>', views.semester, name="semester"), slug
]
urlpatterns += staticfiles_urlpatterns()
