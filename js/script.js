let playerWin = 0;
let computerWin = 0;


function playGame(playerInput){

  clearMessages()

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }else if(argMoveId == 2){
      return 'papier';
    }else if(argMoveId == 3){
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);

    if(argComputerMove == argPlayerMove){
      printMessage('Remis');
    }
    else if(
      (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
      (argComputerMove == 'papier' && argPlayerMove == 'kamień')
      (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
     ){
      printMessage('Komputer wygrał');
      computerWin++;
    }
    else {
      printMessage('Ty wygrywasz');
      playerWin++;
    }
    
    
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);
  document.getElementById(result).textContent = '${playerWin} - ${computerWin}';
  displayResult(computerMove, playerMove)
}

document.getElementById('kamień').addEventListener('click', function() {
  printMessage('Wybrałeś Kamień!');
  playGame(1);  
});

document.getElementById('papier').addEventListener('click', function() {
  printMessage('Wybrałeś Papier!');
  playGame(2);  
});

document.getElementById('nożyce').addEventListener('click', function() {
  printMessage('Wybrałeś Nożyce!');
  playGame(3);  
});


console.log('Wynik rundy: ${result}');