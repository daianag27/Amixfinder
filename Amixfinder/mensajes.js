let isMe = false;

    function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message) {
        const chat = document.querySelector('.chat');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        if (isMe) {
            newMessage.classList.add('message-yo');
        } else {
            newMessage.classList.add('message-tu');
        }
        newMessage.innerHTML = ` ${message}`;
        chat.appendChild(newMessage);
        input.value = '';
        isMe = !isMe; 
    }
}