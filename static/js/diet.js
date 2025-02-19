// document.addEventListener('DOMContentLoaded', () => {
//     const dietForm = document.getElementById('dietForm');
//     const recipeForm = document.getElementById('recipeForm');
    
//     dietForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         generateDietPlan();
//     });

//     recipeForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         findRecipes();
//     });
// });

// function generateDietPlan() {
//     const budget = document.getElementById('budget').value;
//     const calories = document.getElementById('calories').value;
//     const dietType = document.querySelector('input[name="dietType"]:checked')?.value;
//     const macros = Array.from(document.querySelectorAll('input[name="macro"]:checked')).map(input => input.value);
//     const allergies = document.getElementById('allergies').value;
//     const mealFrequency = document.querySelector('input[name="mealFrequency"]:checked')?.value;
//     const cuisine = document.getElementById('cuisine').value;
//     const goal = document.querySelector('input[name="goal"]:checked')?.value;
//     const notes = document.getElementById('dietNotes').value;

//     // Simulate AI response
//     const dietPlanOutput = document.getElementById('dietPlanOutput');
    
//     // Show loading animation
//     dietPlanOutput.innerHTML = '<div class="loading">Generating your personalized diet plan...</div>';
    
//     // Simulate API delay
//     setTimeout(() => {
//         const plan = generateSampleDietPlan(
//             parseInt(calories),
//             dietType,
//             parseInt(mealFrequency),
//             macros,
//             goal
//         );
        
//         dietPlanOutput.innerHTML = plan;
        
//         // Animate the new content
//         const elements = dietPlanOutput.querySelectorAll('.meal-item');
//         elements.forEach((element, index) => {
//             element.style.animation = `fadeSlideIn 0.5s ease-out ${index * 0.1}s forwards`;
//             element.style.opacity = '0';
//         });
//     }, 1500);
// }

// function findRecipes() {
//     const ingredients = document.getElementById('ingredients').value;
//     const cuisine = document.querySelector('input[name="recipeCuisine"]:checked')?.value;
//     const mealType = document.querySelector('input[name="mealType"]:checked')?.value;
//     const cookingTime = document.getElementById('cookingTime').value;
//     const skillLevel = document.querySelector('input[name="skillLevel"]:checked')?.value;
//     const spiceLevel = document.querySelector('input[name="spiceLevel"]:checked')?.value;
//     const budget = document.getElementById('recipeBudget').value;
//     const notes = document.getElementById('recipeNotes').value;

//     // Simulate AI response
//     const recipeOutput = document.getElementById('recipeOutput');
    
//     // Show loading animation
//     recipeOutput.innerHTML = '<div class="loading">Finding perfect recipes for you...</div>';
    
//     // Simulate API delay
//     setTimeout(() => {
//         const recipes = generateSampleRecipes(
//             ingredients.split(',').map(i => i.trim()),
//             cuisine,
//             mealType,
//             parseInt(cookingTime)
//         );
        
//         recipeOutput.innerHTML = recipes;
        
//         // Animate the new content
//         const elements = recipeOutput.querySelectorAll('.recipe-item');
//         elements.forEach((element, index) => {
//             element.style.animation = `fadeSlideIn 0.5s ease-out ${index * 0.1}s forwards`;
//             element.style.opacity = '0';
//         });
//     }, 1500);
// }

// function generateSampleDietPlan(calories, dietType, meals, macros, goal) {
//     const mealCalories = Math.floor(calories / meals);
//     let html = `
//         <div class="diet-summary">
//             <p>Daily Calorie Target: ${calories} kcal</p>
//             <p>Diet Type: ${dietType}</p>
//             <p>Meals per Day: ${meals}</p>
//         </div>
//     `;

//     for (let i = 1; i <= meals; i++) {
//         html += `
//             <div class="meal-item">
//                 <h4>Meal ${i} (${mealCalories} kcal)</h4>
//                 <ul>
//                     ${generateSampleMealItems(dietType, macros).map(item => 
//                         `<li>${item.food} - ${item.portion} (${item.calories} kcal)</li>`
//                     ).join('')}
//                 </ul>
//             </div>
//         `;
//     }

//     return html;
// }

// function generateSampleMealItems(dietType, macros) {
//     const meals = {
//         vegetarian: [
//             { food: 'Quinoa Bowl', portion: '1 cup', calories: 220 },
//             { food: 'Greek Yogurt', portion: '200g', calories: 130 },
//             { food: 'Mixed Nuts', portion: '30g', calories: 180 }
//         ],
//         'non-vegetarian': [
//             { food: 'Grilled Chicken', portion: '150g', calories: 250 },
//             { food: 'Brown Rice', portion: '1 cup', calories: 220 },
//             { food: 'Steamed Broccoli', portion: '100g', calories: 55 }
//         ]
//     };

//     return meals[dietType] || meals.vegetarian;
// }

// function generateSampleRecipes(ingredients, cuisine, mealType, time) {
//     const recipes = [
//         {
//             name: 'Quick Stir-Fry',
//             ingredients: ['vegetables', 'protein', 'sauce'],
//             time: '20 mins',
//             steps: [
//                 'Prep ingredients',
//                 'Heat oil in pan',
//                 'Stir-fry protein',
//                 'Add vegetables',
//                 'Season and serve'
//             ]
//         },
//         {
//             name: 'Healthy Bowl',
//             ingredients: ['grains', 'vegetables', 'protein'],
//             time: '25 mins',
//             steps: [
//                 'Cook grains',
//                 'Prepare protein',
//                 'Chop vegetables',
//                 'Assemble bowl',
//                 'Add dressing'
//             ]
//         }
//     ];

//     let html = '';
//     recipes.forEach(recipe => {
//         html += `
//             <div class="recipe-item">
//                 <h4>${recipe.name}</h4>
//                 <p class="recipe-time">Cooking Time: ${recipe.time}</p>
//                 <div class="recipe-ingredients">
//                     <h5>Ingredients:</h5>
//                     <ul>
//                         ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
//                     </ul>
//                 </div>
//                 <div class="recipe-steps">
//                     <h5>Steps:</h5>
//                     <ol>
//                         ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
//                     </ol>
//                 </div>
//             </div>
//         `;
//     });

//     return html;
// }