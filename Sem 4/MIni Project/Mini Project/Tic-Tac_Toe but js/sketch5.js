let board = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', '']
];

let w;
let h;
let ai = 'X';
let human = 'O';
let currentPlayer = human;

function setup(){
  createCanvas(500, 500);
  w = width / 5;
  h = height / 5;
  bestMove();
}

//function equals5(a,b,c,d,e){
//  return(a==b && b==c && c==d && d==e && a != '');
//}
function equals5(a,b,c,d,e){
  return(((a==b && b==c && c==d) || (b==c && c==d && d==e)) && b != '');
}

function checkWinner(){
  let winner = null;
  //horizontal
  for(let i = 0; i < 5; i++){
    if(equals5(board[i][0], board[i][1], board[i][2], board[i][3], board[i][4])){
      winner = board[i][1];
    }
  //vertical
    if(equals5(board[0][i], board[1][i], board[2][i], board[3][i], board[4][i])){
      winner = board[1][i];
    }
  }
//diagonal
  if(equals5(board[0][0], board[1][1], board[2][2], board[3][3], board[4][4])){
    winner = board[1][1];
  }
  if(equals5(board[0][4], board[1][3], board[2][2], board[3][1], board[4][0])){
    winner = board[1][3];
  }

  if(equals5(board[0][1], board[1][2], board[2][3], board[3][4], board[4][4])){
    winner = board[1][2];
  }
  if(equals5(board[0][3], board[1][2], board[2][1], board[3][0], board[4][0])){
    winner = board[1][2];
  }

  if(equals5(board[1][0], board[2][1], board[3][2], board[4][3], board[4][4])){
    winner = board[3][2];
  }
  if(equals5(board[1][4], board[2][3], board[3][2], board[4][1], board[4][0])){
    winner = board[3][2];
  }

  let openSpots = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }

  if(winner == null && openSpots == 0){
    return 'tie';
  }else{
    return winner;
  }
}


//function nextTurn(){
//  let index = floor(random(available.length));
//  let spot = available.splice(index,1)[0];
//  let i = spot[0];
//  let j = spot[1];
//  board[i][j] = players[currentPlayer];
//  currentPlayer = (currentPlayer + 1) % players.length;
//}

function mousePressed(){
  if(currentPlayer == human){
    // human's turn
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    // if valid turn
    if(board[i][j] == ''){
      board[i][j] = human;
      currentPlayer = ai;
      bestMove();
    }
  }
}

function draw(){
  background(220);
  for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let x = w*i;
        let y = h*j;
        let spot = board[i][j];
        textSize(32);
        line(x+w,y,x+w,y+height);
        line(x,y+h,x+width,y+h);
        strokeWeight(4);
        if(spot == human){
          noFill();
          ellipse(x + w/2,y + h/2,w/2);
        }
        else if(spot == ai){
          line(x + w/4,y + h/4,x + 3*w/4,y + 3*h/4);
          line(x + w/4,y + 3*h/4,x + 3*w/4 ,y + h/4);
        }
      }
  } 
  let result = checkWinner();
  if(result != null){
    noLoop();
    if(result == 'tie'){
      createP(result).style('color','#100').style('font-size','32pt');
    }
    else{
      createP(result).style('color','#100').style('font-size','32pt');
    }
  }
}