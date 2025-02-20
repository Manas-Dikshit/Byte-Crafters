# Byte-Crafters

# Neutrino AI

Neutrino AI is an intelligent platform that provides personalized mental health support, diet planning, and recipe generation. Built with **Django** in the backend and **Bootstrap** in the frontend, Neutrino AI is powered by **Groq API** and **LLaMA 3 70B**, ensuring fast and accurate responses.

## Features

### 🧠 Mental Health Chatbot  
- Offers AI-powered mental health support and guidance.  
- Provides mindfulness exercises and stress management tips.  
- Suggests self-care routines based on user interactions.  

### 🥗 Diet Plan Generator  
- Creates customized diet plans based on user preferences.  
- Considers **diet type, calorie target, cuisine, and veg/non-veg** options.  
- Generates short and concise meal plans with macronutrient details.  

### 🍽️ Recipe Generator  
- Suggests recipes based on dietary preferences and available ingredients.  
- Provides **quick, easy-to-follow steps** with calorie breakdowns.  
- Supports multiple cuisines and meal types.  

## Tech Stack  

| Component     | Technology Used  |
|--------------|------------------|
| Backend      | Django (Python)  |
| Frontend     | Bootstrap (HTML, CSS, JS)  |
| AI Model     | LLaMA 3 70B (via Groq API)  |

## Installation  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-repo/neutrino-ai.git
   cd neutrino-ai
2. Activate Virtual ENvironment
  python -m venv venv
  source venv/bin/activate  # On Windows: venv\Scripts\activate

3. Run Migrations
   python manage.py migrate
4. Start Django Server
   python manage.py runserver

