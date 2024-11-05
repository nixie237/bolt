// script.js
document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value.trim();

    if (userInput) {
        addMessage(userInput, "user-message");
        document.getElementById("user-input").value = ""; // Clear input field
        botResponse(userInput);
    }
});

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let userInput = document.getElementById("user-input").value.trim();

        if (userInput) {
            addMessage(userInput, "user-message");
            document.getElementById("user-input").value = ""; // Clear input field
            botResponse(userInput);
        }
    }
});

function addMessage(message, senderClass) {
    let chatBox = document.getElementById("chat-box");
    let newMessage = document.createElement("div");
    newMessage.classList.add("chat-message", senderClass);
    newMessage.innerText = message;
    chatBox.appendChild(newMessage);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botResponse(userInput) {
    let response = "";

    if (userInput.toLowerCase().includes("hello")) {
        response = "Hi there! How can I help you?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        response = "I'm just a bot, but I'm doing fine! How about you?";
    } else if (userInput.toLowerCase().includes("bye")) {
        response = "Goodbye! Have a great day!";
    } else {
        response = "Sorry, I didn't understand that. Can you try asking something else?";
    }

    setTimeout(function() {
        addMessage(response, "bot-message");
    }, 1000); // Simulate a delay in response
}
