// Dark Mode Toggle
const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode einschalten";
    } else {
        toggleButton.textContent = "Dark Mode einschalten";
    }
});

document.getElementById('calendarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert, dass das Formular neu geladen wird

    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;
    const outputDiv = document.getElementById('output');

    if (date && message) {
        outputDiv.textContent = `Datum: ${date}, Nachricht: ${message}`;
    } else {
        outputDiv.textContent = "Bitte fülle alle Felder aus.";
    }
});
