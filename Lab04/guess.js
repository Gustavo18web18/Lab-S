// guess.js

// Gerar um número aleatório entre 0 e 99
let randomNumber = Math.floor(Math.random() * 100);

// Função para verificar a adivinhação
function checkGuess() {
    let guess = document.getElementById("guessInput").value;
    let message = document.getElementById("message");

    if (guess === "") {
        message.textContent = "Por favor, digite um número.";
        return;
    }

    guess = parseInt(guess);

    // Verificar se o número é válido
    if (isNaN(guess) || guess < 0 || guess > 99) {
        message.textContent = "Digite um número entre 0 e 99.";
        return;
    }

    // Verificar se a adivinhação está correta
    if (guess < randomNumber) {
        message.textContent = "O número é maior. Tente novamente!";
        document.body.style.backgroundColor = "red";
    } else if (guess > randomNumber) {
        message.textContent = "O número é menor. Tente novamente!";
        document.body.style.backgroundColor = "red";
    } else {
        message.textContent = "Parabéns, você acertou!";
        document.body.style.backgroundColor = "green";
    }
}
