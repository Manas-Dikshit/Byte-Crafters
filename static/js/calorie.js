document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('fitnessForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateFitnessPlan();
    });
});

function calculateFitnessPlan() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const targetWeight = parseFloat(document.getElementById('targetWeight').value);
    const fitnessGoal = document.getElementById('fitnessGoal').value;
    const exerciseType = document.getElementById('exerciseType').value;
    const exerciseDuration = parseInt(document.getElementById('exerciseDuration').value);

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr;
    if (sex === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate daily calorie needs based on activity level and goals
    let dailyCalories = calculateDailyCalories(bmr, exerciseDuration);
    let calorieTarget = calculateCalorieTarget(dailyCalories, fitnessGoal);
    
    // Update calorie calculations
    document.getElementById('bmr').textContent = Math.round(bmr);
    document.getElementById('dailyCalories').textContent = Math.round(dailyCalories);
    document.getElementById('calorieTarget').textContent = Math.round(calorieTarget);

    // Generate exercise recommendations
    generateExerciseRecommendations(exerciseType, fitnessGoal);

    // Calculate calories burned
    calculateCaloriesBurned(exerciseType, exerciseDuration, weight);

    // Animate results
    animateResults();
}

function calculateDailyCalories(bmr, exerciseDuration) {
    let activityMultiplier;
    if (exerciseDuration < 30) {
        activityMultiplier = 1.2; // Sedentary
    } else if (exerciseDuration < 60) {
        activityMultiplier = 1.375; // Light activity
    } else if (exerciseDuration < 90) {
        activityMultiplier = 1.55; // Moderate activity
    } else {
        activityMultiplier = 1.725; // Very active
    }
    return bmr * activityMultiplier;
}

function calculateCalorieTarget(dailyCalories, fitnessGoal) {
    switch (fitnessGoal) {
        case 'weightLoss':
            return dailyCalories - 500; // Create a 500 calorie deficit
        case 'muscleGain':
            return dailyCalories + 300; // Create a 300 calorie surplus
        default:
            return dailyCalories; // Maintenance
    }
}

function generateExerciseRecommendations(exerciseType, fitnessGoal) {
    const recommendationsDiv = document.getElementById('exerciseRecommendations');
    let recommendations = '';

    switch (exerciseType) {
        case 'cardio':
            recommendations = generateCardioRecommendations(fitnessGoal);
            break;
        case 'strength':
            recommendations = generateStrengthRecommendations(fitnessGoal);
            break;
        case 'mixed':
            recommendations = generateMixedRecommendations(fitnessGoal);
            break;
    }

    recommendationsDiv.innerHTML = recommendations;
}

function generateCardioRecommendations(fitnessGoal) {
    const recommendations = {
        weightLoss: `
            <ul>
                <li>30-45 minutes of high-intensity interval training (HIIT) 3x/week</li>
                <li>45-60 minutes of steady-state cardio 2x/week</li>
                <li>Focus on: Running, Cycling, Swimming, or Rowing</li>
            </ul>
        `,
        muscleGain: `
            <ul>
                <li>20-30 minutes of moderate cardio 3x/week</li>
                <li>Focus on maintaining heart health without burning too many calories</li>
                <li>Recommended: Light jogging, Incline walking</li>
            </ul>
        `,
        maintenance: `
            <ul>
                <li>30-45 minutes of mixed cardio 3-4x/week</li>
                <li>Alternate between high and low intensity</li>
                <li>Include variety: Swimming, Cycling, Running</li>
            </ul>
        `
    };
    return recommendations[fitnessGoal];
}

function generateStrengthRecommendations(fitnessGoal) {
    const recommendations = {
        weightLoss: `
            <ul>
                <li>Full-body workouts 3x/week</li>
                <li>12-15 reps per set, 3 sets per exercise</li>
                <li>Focus on compound movements</li>
                <li>30-45 seconds rest between sets</li>
            </ul>
        `,
        muscleGain: `
            <ul>
                <li>Split routine 4-5x/week</li>
                <li>8-12 reps per set, 4 sets per exercise</li>
                <li>Progressive overload focus</li>
                <li>90-120 seconds rest between sets</li>
            </ul>
        `,
        maintenance: `
            <ul>
                <li>3-4 workouts per week</li>
                <li>10-12 reps per set, 3 sets per exercise</li>
                <li>Mix of compound and isolation exercises</li>
                <li>60 seconds rest between sets</li>
            </ul>
        `
    };
    return recommendations[fitnessGoal];
}

function generateMixedRecommendations(fitnessGoal) {
    const recommendations = {
        weightLoss: `
            <ul>
                <li>3x/week strength training (full body)</li>
                <li>2x/week HIIT cardio</li>
                <li>1x/week steady-state cardio</li>
                <li>Focus on calorie burn and muscle preservation</li>
            </ul>
        `,
        muscleGain: `
            <ul>
                <li>4x/week strength training (split routine)</li>
                <li>2x/week light cardio</li>
                <li>Emphasis on progressive overload</li>
                <li>Recovery-focused cardio sessions</li>
            </ul>
        `,
        maintenance: `
            <ul>
                <li>3x/week strength training</li>
                <li>2x/week varied cardio</li>
                <li>1x/week flexibility/mobility work</li>
                <li>Balance between strength and endurance</li>
            </ul>
        `
    };
    return recommendations[fitnessGoal];
}

function calculateCaloriesBurned(exerciseType, duration, weight) {
    const caloriesBurnedDiv = document.getElementById('caloriesBurned');
    let caloriesPerHour;

    switch (exerciseType) {
        case 'cardio':
            caloriesPerHour = 8 * weight; // Moderate intensity cardio
            break;
        case 'strength':
            caloriesPerHour = 5 * weight; // Weight training
            break;
        case 'mixed':
            caloriesPerHour = 6.5 * weight; // Average of cardio and strength
            break;
    }

    const caloriesBurned = (caloriesPerHour * duration) / 60;
    
    caloriesBurnedDiv.innerHTML = `
        <p>Estimated calories burned per session: <strong>${Math.round(caloriesBurned)}</strong></p>
        <p>Weekly calories burned (3-5 sessions): <strong>${Math.round(caloriesBurned * 4)}-${Math.round(caloriesBurned * 5)}</strong></p>
    `;
}

function animateResults() {
    const cards = document.querySelectorAll('.results-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}