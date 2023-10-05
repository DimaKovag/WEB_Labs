document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Ваш код обробки форми може бути тут
        alert("Ваше повідомлення відправлено!");
        // Очищаємо поля форми
        contactForm.reset();
    });
});
