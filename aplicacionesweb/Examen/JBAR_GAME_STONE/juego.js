function playGame() {
    const choices = ['piedra', 'papel', 'tijeras'];
    const images = {
        'papel': 'img/papel.jpg',  
        'tijeras': 'img/tijera.jpeg',    
        'piedra': 'img/piedra.jpg' 
    };

    let playerChoice = choices[Math.floor(Math.random() * choices.length)];
    let machineChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('player').src = images[playerChoice];
    document.getElementById('machine').src = images[machineChoice];

    let result = determineWinner(playerChoice, machineChoice);
    document.getElementById('result').textContent = result;
}
function determineWinner(player, machine) {
    if (player === machine) {
        return '¡Es un empate!';
    } else if (
        (player === 'piedra' && machine === 'tijeras') ||
        (player === 'papel' && machine === 'piedra') ||
        (player === 'tijeras' && machine === 'papel')
    ) {
        return '¡Ganaste!';
    } else {
        return 'perdiste asi es la vida';
    }
}
