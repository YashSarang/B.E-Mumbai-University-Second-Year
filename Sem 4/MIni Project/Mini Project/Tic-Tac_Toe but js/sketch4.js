let board = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
  
  let w; // = width / 3;
  let h; // = height / 3;
  
  let ai = 'X';
  let human = 'O';
  let currentPlayer = human;
  
  function setup() {
    createCanvas(400, 400);
    w = width / 4;
    h = height / 4;
    bestMove();
  }
  
  function equals4(a, b, c, d) {
    return a == b && b == c && c == d && a != '';
  }
  
  function checkWinner() {
    let winner = null;
  
    // horizontal
    for (let i = 0; i < 4; i++) {
      if (equals4(board[i][0], board[i][1], board[i][2], board[i][3])) {
        winner = board[i][1];
      }
    }
  
    // Vertical
    for (let i = 0; i < 4; i++) {
      if (equals4(board[0][i], board[1][i], board[2][i], board[3][i])) {
        winner = board[1][i];
      }
    }
  
    // Diagonal
    if (equals4(board[0][0], board[1][1], board[2][2], board[3][3])) {
      winner = board[1][1];
    }
    if (equals4(board[3][0], board[2][1], board[1][2], board[0][3])) {
      winner = board[2][1];
    }
  
    let openSpots = 0;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] == '') {
          openSpots++;
        }
      }
    }
  
    if (winner == null && openSpots == 0) {
      return 'tie';
    } else {
      return winner;
    }
  }
  
  function mousePressed() {
    if (currentPlayer == human) {
      // Human make turn
      let i = floor(mouseX / w);
      let j = floor(mouseY / h);
      // If valid turn
      if (board[i][j] == '') {
        board[i][j] = human;
        currentPlayer = ai;
        bestMove();
      }
    }
  }
  
  function draw() {
    background(255);
    strokeWeight(4);
  
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
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
    if (result != null) {
      noLoop();
      let resultP = createP('');
      resultP.style('font-size', '32pt');
      if (result == 'tie') {
        resultP.html('Tie!');
      } else {
        resultP.html(`${result} wins!`);
      }
    }
  }