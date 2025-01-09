let playerWin ;
let computerWin ;


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

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz');
    }else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis');
    }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Komputer wygrał');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis');
    }else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Komputer wygrał');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis');
    }else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Komputer wygrał');
    }else {
      printMessage('??');
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);
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