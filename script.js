var turn = "x";
var turnsTaken =  0;
var gameOver = false;
var getnum = new RegExp("[0-9]");
var board = [[1, 2, 3],// initialize array with these  
             [4, 5, 6],//values just to avoid the 
             [7, 8, 9]];//diagonals being equal before
                        //play
function performLogic(buttonId, tileId){
  if(!gameOver){
    $(tileId).html(turn);
    var x = (buttonId.match(getnum)[0]-1)%3;
    var y = Math.floor((buttonId.match(getnum)[0]-1)/3);
    board[x][y] = turn;

    turnsTaken++;
    if(turnsTaken === 9){
      gameOver = true;
      $("h1").text("It's a draw!");
    }

    if(board[x][0] === board[x][1] && board[x][1] === board[x][2]){
      gameOver = true;
      $("h1").text(`${turn} wins!`);
    }

    if(board[0][y] === board[1][y] && board[1][y] === board[2][y]){
      gameOver = true;
      $("h1").text(`${turn} wins!`);
    }

    if((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] === board[1][1] && board[1][1] === board[2][0])){
      gameOver = true;
      $("h1").text(`${turn} wins!`);
    }

    turn = switchTurn(turn);
  }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});


function switchTurn(turn){
  if(turn === "x"){
    return "o";
  } 

  if(turn === "o"){
    return "x";
  } 
}