let computerMove = `kamień`;
let playerMove = 'papier'

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

printMessage('Zagrałem' + playerMove + 'Wygrywam')

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}