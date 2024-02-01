function startCountdown() {
    // Get the user's age from the input field
    let eta = document.getElementById('age').value;

    // Calculate the remaining time in years
    let tempoRimanente = 80 - eta;

    // Convert the remaining time to seconds
    let tempoRimanenteInSecondi = tempoRimanente * 365 * 24 * 60 * 60;

    // Start the countdown
    let countdown = setInterval(function() {
        if(tempoRimanenteInSecondi <= 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerText = "Il tempo è scaduto.";
        } else {
            document.getElementById('countdown').innerText = `Ti rimangono ${tempoRimanenteInSecondi} secondi da vivere.`;
            tempoRimanenteInSecondi--;
        }
    }, 1000);
}