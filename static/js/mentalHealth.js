// function sendMessage() {
//     let userInput = document.getElementById("user-input").value.trim();
//     let chatBox = document.getElementById("chat-box");

//     if (userInput === "") return;

//     // Append user message
//     let userMessage = document.createElement("p");
//     userMessage.className = "user-message";
//     userMessage.textContent = userInput;
//     chatBox.appendChild(userMessage);

//     document.getElementById("user-input").value = "";

//     // Scroll to latest message
//     chatBox.scrollTop = chatBox.scrollHeight;
    
//     setTimeout(() => {
//         let botResponse = getBotResponse(userInput);
//         let botMessage = document.createElement("p");
//         botMessage.className = "bot-message";
//         botMessage.textContent = botResponse;
//         chatBox.appendChild(botMessage);
//         chatBox.scrollTop = chatBox.scrollHeight;
//     }, 1000);
// }

function getCSRFToken() {
    return document.cookie.split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1];
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let chatBox = document.getElementById("chat-box");

    if (userInput === "") return;

    // Append user message
    let userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Send AJAX request with CSRF token
    fetch("/chatbot/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCSRFToken(), // Attach CSRF token
        },
        body: JSON.stringify({ message: userInput }),
    })
    .then(getBotResponse(response => response.json()))
    .then(data => {
        console.log("Bot Response:", data);
        let botMessage = document.createElement("p");
        botMessage.className = "bot-message";
        botMessage.textContent = data.reply;
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    // .catch(error => {
    //     console.error("Error:", error);
    // });
}

// Add event listener to send message on pressing Enter
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});



function getBotResponse(response) {
    // input = input.toLowerCase();
    console.log(response);
    return response;    
    // if (input.includes("hello") || input.includes("hi")) {
    //     return "Hello! How can I help you today?";
    // } else if (input.includes("sad") || input.includes("depressed")) {
    //     return "I'm here for you. Want to try some relaxation exercises?";
    // } else if (input.includes("happy")) {
    //     return "That's great to hear! Keep smiling 😊";
    // } else {
    //     return "I'm here to listen. Tell me more.";
    // }
}

function goBack() {
    window.history.back(); // Goes back to the previous page
}

// Add event listener to send message on pressing Enter
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission behavior
        sendMessage();
    }
});


function goBack() {
    window.history.back();
}

