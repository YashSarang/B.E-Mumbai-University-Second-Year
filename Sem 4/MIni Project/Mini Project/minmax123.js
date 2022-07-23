function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        //  let bestScore = -Infinity;
        //  for (let i = 0; i < 7; i++) {
        //    for (let j = 0; j < 7; j++) {
        //      // Is the spot available?
        //      if (board[i][j] == '') {
        //        board[i][j] = ai;
        //        let score = minimax(board, depth + 1, false);
        //        board[i][j] = '';
        //        bestScore = max(score, bestScore);
        //      }
        //    }
        //  }
        //  return bestScore;
        return 1;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                // Is the spot available?
                if (board[i][j] == '') {
                    board[i][j] = human;
                    let score = minimax(board, depth + 1, true);
                    board[i][j] = '';
                    bestScore = min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
    return 1;
}

let MAX = 1000;
let MIN = -1000;

// Returns optimal value for
// current player (Initially called
// for root and maximizer)
function minimax(nodeIndex, depth, maximizingPlayer, values, alpha, beta) {
    // Terminating condition. i.e
    // leaf node is reached
    if (depth == 3)
        return values[nodeIndex];

    if (maximizingPlayer) {
        let best = MIN;

        // Recur for left and
        // right children
        for (let i = 0; i < 2; i++) {
            let val = minimax(depth + 1, nodeIndex * 2 + i,
                false, values, alpha, beta);
            best = Math.max(best, val);
            alpha = Math.max(alpha, best);

            // Alpha Beta Pruning
            if (beta <= alpha)
                break;
        }
        return best;
    } else {
        let best = MAX;

        // Recur for left and
        // right children
        for (let i = 0; i < 2; i++) {

            let val = minimax(depth + 1, nodeIndex * 2 + i,
                true, values, alpha, beta);
            best = Math.min(best, val);
            beta = Math.min(beta, best);

            // Alpha Beta Pruning
            if (beta <= alpha)
                break;
        }
        return best;
    }
}