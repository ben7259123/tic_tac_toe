var playerX, playerY, objX, objY, playerTurn, gameInPlay, numberOfTurns, playerXScore, playerYScore;

function Position() {
  this.verticalOne = 0;
  this.verticalTwo = 0;
  this.verticalThree = 0;
  this.horizOne = 0;
  this.horizTwo = 0;
  this.horizThree = 0;
  this.diagOne = 0;
  this.diagTwo = 0;
}

playerXScore = 0;
playerYScore = 0;

init();

function init() {
  gameInPlay = true;
  playerX = 0;
  playerY = 1;
  var allBoxes = document.querySelectorAll('.grid-unit');

  for ( var i = 0; i < 9; i++ ) {
    allBoxes[i].innerHTML = '&nbsp;';
  }

  objX = new Position();
  objY = new Position();
  playerTurn = 0;
  numberOfTurns = 1;
}

document.getElementById('wholeboard').addEventListener('click', placeLetter, false);

function placeLetter(e) {
  var target = e.target;

  if ((target.innerHTML === '&nbsp;') && (gameInPlay === true)) {
    if (playerTurn === 0) {
      target.textContent = 'X';
      checkPosition(objX);
    } else if (playerTurn === 1) {
      target.textContent = 'O';
      checkPosition(objY);
    }

    function checkPosition(objArg) {
      var box1 = document.getElementById('box-1');
      var box2 = document.getElementById('box-2');
      var box3 = document.getElementById('box-3');
      var box4 = document.getElementById('box-4');
      var box5 = document.getElementById('box-5');
      var box6 = document.getElementById('box-6');
      var box7 = document.getElementById('box-7');
      var box8 = document.getElementById('box-8');
      var box9 = document.getElementById('box-9');

      switch (target) {

        case box1:
          objArg.verticalOne += 1;
          objArg.horizOne += 1;
          objArg.diagOne += 1;
          break;

        case box2:
          objArg.horizOne += 1;
          objArg.verticalTwo += 1;
          break;

        case box3:
          objArg.horizOne += 1;
          objArg.verticalThree += 1;
          objArg.diagTwo += 1;
          break;

        case box4:
          objArg.verticalOne += 1;
          objArg.horizTwo += 1;
          break;

        case box5:
          objArg.diagOne += 1;
          objArg.diagTwo += 1;
          objArg.horizTwo += 1;
          objArg.verticalTwo += 1;
          break;

        case box6:
          objArg.horizTwo += 1;
          objArg.verticalThree += 1;
          break;

        case box7:
          objArg.verticalOne += 1;
          objArg.diagTwo += 1;
          objArg.horizThree += 1;
          break;

        case box8:
          objArg.verticalTwo += 1;
          objArg.horizThree += 1;
          break;

        case box9:
          objArg.diagOne += 1;
          objArg.verticalThree += 1;
          objArg.horizThree += 1;
      }

      var prop;
      var loopNum = 0;

      for (prop in objArg) {
        loopNum += 1;

        if ((objArg[prop] === 3) && (playerTurn === 0)) {
          console.log('Player X wins');
          playerXScore += 1;
          document.getElementById('x-span').textContent = playerXScore;
          gameInPlay = false;
          break;
        } else if ((objArg[prop] === 3) && (playerTurn === 1)) {
          console.log('Player Y wins');
          playerYScore += 1;
          document.getElementById('y-span').textContent = playerYScore;
          gameInPlay = false;
          break;
        } else if ((numberOfTurns === 9) && (loopNum === 8)) {
          console.log('It is a draw');
          gameInPlay = false;
          break;
        }
      }
      numberOfTurns += 1;
      playerTurn === 0 ? playerTurn = 1 : playerTurn = 0;
    } // end of checkPosition function
  } // end of if statement
}  //end of placeLetter function

document.getElementById('reset').addEventListener('click', init, false);
