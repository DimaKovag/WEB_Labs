function sendMessage(user) {
    const chatBox = document.getElementById("chatBox");
    const user1Input = document.getElementById("user1Input");
    const user2Input = document.getElementById("user2Input");
    let message1 = user1Input.value;
    let message2 = user2Input.value;
    if ((user === "user1") && (message1.length !== 0)) {
        user1Input.value = '';
        chatBox.innerHTML += `<div class="message user1">${message1}</div>`;
        chatBox.innerHTML += '<br>';
    } else if ((user === "user2") && (message2.length !== 0)) {
        user2Input.value = '';
        chatBox.innerHTML += `<div class="message user2">${message2}</div>`;
        chatBox.innerHTML += '<br>';
    }
    chatBox.scrollTop = chatBox.scrollHeight;
}
