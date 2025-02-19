from django.shortcuts import render, HttpResponse, redirect;
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import requests
import json
# Create your views here.

def index(request):
    return render(request, "index.html")


def mentalHealth(request):
    if request.method == 'POST':
       
        print(request.POST)
        message = request.POST.get('message')
        print(message)
    return render(request, "mental_health.html")


def nutritionist(request):
    return render(request, "nutrition.html")


@csrf_exempt  
def chatbot(request):
    if request.method == "POST":
        print(request.body)
        data = json.loads(request.body)
        user_message = data.get("message", "").lower()
        print(user_message)

        response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": "Bearer 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",
            "Content-Type": "application/json",
        },
        data=json.dumps({
            "model": "meta-llama/llama-3.3-70b-instruct:free",
            "messages": [
            {
                "role": "user",
                "content": f"You are Neutrino, a friendly and supportive mental health chatbot created by BytesCraft, a team of 1st Year students from SUIIT, Burla. Your role is to respond only to mental health-related queries in a short, crisp, and encouraging manner. You do not answer unrelated questions. Your tone should be warm, empathetic, and positive. User's Message : {user_message}."
            }
            ],
            
        })
        )
        while(json.dumps(response.json()['choices'][0]['message']['content'], indent=0) == '""'):
            response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": "Bearer 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",
            "Content-Type": "application/json",
        },
        data=json.dumps({
            "model": "meta-llama/llama-3.3-70b-instruct:free",
            "messages": [
            {
                "role": "user",
                "content": f"You are Neutrino, a friendly and supportive mental health chatbot. Your role is to respond only to mental health-related queries in a short, crisp, and encouraging manner. You do not answer unrelated questions. Your tone should be warm, empathetic, and positive. User's Message : {user_message}."
            }
            ],
            
        })
        )
        reply_text =  str(json.dumps(response.json()['choices'][0]['message']['content'], indent=0)).strip('"').strip('\n')
        print(json.dumps(response.json()['choices'][0]['message']['content'], indent=0))
        return JsonResponse({"reply" : reply_text})


def team(request):
    return render(request, "NeutrinoTeam.html")


def calorie(request):
    return render(request, "calorie.html")

def diet(request):
    return render(request, "diet.html")

def diet_plan(request):
    if request.method == "POST":
        budget = request.POST.get('budget')
        dietType  = request.POST.get('dietType')
        cal_tar = request.POST.get('cal_tar')
        macro = request.POST.get('macro')
        allergy = request.POST.get('allergy')
        mealFrequency = request.POST.get('mealFrequency')
        cuisine = request.POST.get('cuisine')
        goal = request.POST.get('goal')
        dietNotes = request.POST.get('dietNotes')


        response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": "Bearer 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",
            "Content-Type": "application/json",
        },
        data=json.dumps({
            "model": "meta-llama/llama-3.3-70b-instruct:free",
            "messages": [
            {
                "role": "user",
                "content": f""
            }
            ],
            
        })
        )
        while(json.dumps(response.json()['choices'][0]['message']['content'], indent=0) == '""'):
            response = requests.post(
        url="https://openrouter.ai/api/v1/chat/completions",
        headers={
            "Authorization": "Bearer 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",
            "Content-Type": "application/json",
        },
        data=json.dumps({
            "model": "meta-llama/llama-3.3-70b-instruct:free",
            "messages": [
            {
                "role": "user",
                "content": f"Generate a short and krisp personalized diet plan based on: Budget: {budget} Diet Type: {dietType} Calories: {cal_tar} Allergies: {allergy} Macro Nutrients: {macro} Meal Frequency: {mealFrequency} Cuisine: {cuisine} Goal: {goal} Diet Notes: {dietNotes}. Include quick meal options with portion sizes and key ingredients."
            }
            ],
            
        })
        )
        reply_text =  str(json.dumps(response.json()['choices'][0]['message']['content'], indent=0)).strip('"')

        print(reply_text)
        return render(request, "diet.html", context={"diet_reply": reply_text.strip("\n")})
    return render(request, "diet.html")
def recipe(request):
    if request.method == "POST":
        pass
    return render(request, "diet.html")


def features(request):
    return render(request, "NeutrinoFeatures.html")
# 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



