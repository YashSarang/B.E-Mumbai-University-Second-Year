//Making the Board
initialization:
  let univ_grid_size = 7;
//asking the user for the grid size
let temp = []
let board = []

for (let iter = 0; iter < univ_grid_size; iter++) {
  temp.push('');
}
for (let iter = 0; iter < univ_grid_size; iter++) {
  board.push(temp);
}
// console.log(temp2)


// let board = [
//   ['', '', '','', ''],
//   ['', '', '','', ''],
//   ['', '', '','', ''],
//   ['', '', '','', ''],
//   ['', '', '','', '']
// ];

// let w; // = width / 3;
// let h; // = height / 3;
let w; // = width / 3;
let h; // = height / 3;


// let ai = 'X';
// let human = 'O';
// let currentPlayer = human;
let ai = 'X';
let human = 'O';
let currentPlayer = human;

let checking_len = 3;

// function setup() {
//   createCanvas(400, 400);
//   w = width / 3;
//   h = height / 3;
//   bestMove();
//}
function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  bestMove();
}

//Writing the function to check the winning pattern
if (univ_grid_size == 3) {
  checking_len = 3;

  function equals(a, b, c, d = 0, e = 0) {
    d = 0;
    e = 0;
    return a == b && b == c && a != '';
  }
} else {
  if (univ_grid_size == 5) {

    checking_len = 4;

    function equals(a, b, c, d, e = 0) {
      e = 0;
      return a == b && b == c && c == d && a != '';
    }
  } else {
    checking_len = 5;

    function equals(a, b, c, d, e) {

      return a == b && b == c && c == d && d == e && a != '';
    }
  }
}
// function equals3(a, b, c) {
//   return a == b && b == c && a != '';
// }

// function checkWinner() {
//   let winner = null;
function checkWinner(checking_len) {
  let winner = null;
  //   // horizontal
  //   for (let i = 0; i < 3; i++) {
  //     if (equals3(board[i][0], board[i][1], board[i][2])) {
  //       winner = board[i][0];
  //     }
  //   }
  //for horizontal
  if (univ_grid_size == 3) {
    for (let i = 0; i < checking_len; i++) {
      if (equals(board[i][0], board[i][1], board[i][2])) {
        winner = board[i][0];
      }
    }
  } else {
    if (univ_grid_size == 5) {
      for (let i = 0; i < checking_len; i++) {
        if (equals(board[i][0], board[i][1], board[i][2]), board[i][3]) {
          winner = board[i][0];
        }

        if (equals(board[i][1], board[i][2]), board[i][3], board[i][4]) {
          winner = board[i][0];
        }
      }
    } else {
      if (univ_grid_size == 7) {
        for (let i = 0; i < checking_len; i++) {
          if (equals(board[i][0], board[i][1], board[i][2]), board[i][3], board[i][4]) {
            winner = board[i][0];
          }

          if (equals(board[i][1], board[i][2]), board[i][3], board[i][4], board[i][5]) {
            winner = board[i][0];
          }

          if (equals(board[i][2]), board[i][3], board[i][4], board[i][5], board[i][6]) {
            winner = board[i][0];
          }
        }
      }
    }
  }

  //   // Vertical
  //   for (let i = 0; i < 3; i++) {
  //     if (equals3(board[0][i], board[1][i], board[2][i])) {
  //       winner = board[0][i];
  //     }
  //   }
  //for horizontal
  if (univ_grid_size == 3) {
    for (let i = 0; i < checking_len; i++) {
      if (equals(board[0][i], board[1][i], board[2][i])) {
        winner = board[0][i];
      }
    }
  } else {
    if (univ_grid_size == 5) {
      for (let i = 0; i < checking_len; i++) {
        if (equals(board[0][i], board[1][i], board[2][i]), board[3][i]) {
          winner = board[0][i];
        }

        if (equals(board[1][i], board[2][i]), board[3][i], board[4][i]) {
          winner = board[0][i];
        }
      }
    } else {
      for (let i = 0; i < checking_len; i++) {
        if (equals(board[0][i], board[1][i], board[2][i]), board[3][i], board[4][i]) {
          winner = board[0][i];
        }

        if (equals(board[1][i], board[2][i]), board[3][i], board[4][i], board[5][i]) {
          winner = board[0][i];
        }

        if (equals(board[2][i]), board[3][i], board[4][i], board[5][i], board[6][i]) {
          winner = board[0][i];
        }
      }
    }
  }

  //   // Diagonal
  //   if (equals3(board[0][0], board[1][1], board[2][2])) {
  //     winner = board[0][0];
  //   }
  //   if (equals3(board[2][0], board[1][1], board[0][2])) {
  //     winner = board[2][0];
  //   }

  // for Diagonal
  if (univ_grid_size == 3) {
    if (equals(board[0][0], board[1][1], board[2][2])) {
      winner = board[0][0];
    }
    if (equals(board[2][0], board[1][1], board[0][2])) {
      winner = board[2][0];
    }
  } else {
    if (univ_grid_size == 5) {

      //main diagonal downwards
      if (equals(board[0][0], board[1][1], board[2][2], board[3][3])) {
        winner = board[0][0];
      }
      if (equals(board[1][1], board[2][2], board[3][3], board[4][4])) {
        winner = board[1][1];
      }

      //main diagonal upwards      
      if (equals(board[4][0], board[3][1], board[2][2], board[1][3])) {
        winner = board[4][0];
      }
      if (equals(board[3][1], board[2][2], board[1][3], board[0][4])) {
        winner = board[3][1];
      }

      //side diagonal downwards
      if (equals(board[1][0], board[2][1], board[3][2], board[4][3])) {
        winner = board[1][0];
      }
      if (equals(board[0][1], board[1][2], board[2][3], board[3][4])) {
        winner = board[0][1];
      }

      //side diagonals upwards
      if (equals(board[3][0], board[2][1], board[1][2], board[0][3])) {
        winner = board[3][0];
      }
      if (equals(board[4][1], board[3][2], board[2][3], board[1][4])) {
        winner = board[4][1];
      }

    } else {

      //main diagonal downwards
      if (equals(board[0][0], board[1][1], board[2][2], board[3][3], board[4][4])) {
        winner = board[0][0];
      }
      if (equals(board[1][1], board[2][2], board[3][3], board[4][4], board[5][5])) {
        winner = board[1][1];
      }
      if (equals(board[2][2], board[3][3], board[4][4], board[5][5], board[6][6])) {
        winner = board[2][2];
      }

      //side-side diagonal upwards      
      if (equals(board[4][0], board[3][1], board[2][2], board[1][3], board[0][4])) {
        winner = board[4][0];
      }
      if (equals(board[6][2], board[5][3], board[4][2], board[3][1], board[2][0])) {
        winner = board[6][2];
      }

      //side-side diagonal downwards      
      if (equals(board[2][0], board[3][1], board[4][2], board[5][3], board[6][4])) {
        winner = board[2][0];
      }
      if (equals(board[0][2], board[1][3], board[2][4], board[3][5], board[4][6])) {
        winner = board[0][2];
      }

      //side diagonal downwards
      if (equals(board[1][0], board[2][1], board[3][2], board[4][3], board[5][4])) {
        winner = board[1][0];
      }
      if (equals(board[2][1], board[3][2], board[4][3], board[5][4], board[6][5])) {
        winner = board[2][1];
      }

      if (equals(board[0][1], board[1][2], board[2][3], board[3][4], board[4][5])) {
        winner = board[0][1];
      }
      if (equals(board[1][2], board[2][3], board[3][4], board[4][5], board[5][6])) {
        winner = board[1][2];
      }

      //side diagonals upwards
      if (equals(board[5][0], board[4][1], board[3][2], board[2][3], board[1][4])) {
        winner = board[5][0];
      }
      if (equals(board[4][1], board[3][2], board[2][3], board[1][4], board[0][5])) {
        winner = board[4][1];
      }

      if (equals(board[6][1], board[5][2], board[4][3], board[3][4], board[2][5])) {
        winner = board[6][1];
      }
      if (equals(board[5][2], board[4][3], board[3][4], board[2][5], board[1][6])) {
        winner = board[5][2];
      }
    }
  }

  //   let openSpots = 0;
  //   for (let i = 0; i < 3; i++) {
  //     for (let j = 0; j < 3; j++) {
  //       if (board[i][j] == '') {
  //         openSpots++;
  //       }
  //     }
  //   }

  //   if (winner == null && openSpots == 0) {
  //     return 'tie';
  //   } else {
  //     return winner;
  //   }
  // }

  // function mousePressed() {
  //   if (currentPlayer == human) {
  //     // Human make turn
  //     let i = floor(mouseX / w);
  //     let j = floor(mouseY / h);
  //     // If valid turn
  //     if (board[i][j] == '') {
  //       board[i][j] = human;
  //       currentPlayer = ai;
  //       bestMove();
  //     }
  //   }
  // }

  // function draw() {
  //   background(255);
  //   strokeWeight(4);

  //   line(w, 0, w, height);
  //   line(w * 2, 0, w * 2, height);
  //   line(0, h, width, h);
  //   line(0, h * 2, width, h * 2);

  //   for (let j = 0; j < 3; j++) {
  //     for (let i = 0; i < 3; i++) {
  //       let x = w * i + w / 2;
  //       let y = h * j + h / 2;
  //       let spot = board[i][j];
  //       textSize(32);
  //       let r = w / 4;
  //       if (spot == human) {
  //         noFill();
  //         ellipse(x, y, r * 2);
  //       } else if (spot == ai) {
  //         line(x - r, y - r, x + r, y + r);
  //         line(x + r, y - r, x - r, y + r);
  //       }
  //     }
  //   }

  //   let result = checkWinner();
  //   if (result != null) {
  //     noLoop();
  //     let resultP = createP('');
  //     resultP.style('font-size', '32pt');
  //     if (result == 'tie') {
  //       resultP.html('Tie!');
  //     } else {
  //       resultP.html(`${result} wins!`);
  //     }
  //   }
  // }
}