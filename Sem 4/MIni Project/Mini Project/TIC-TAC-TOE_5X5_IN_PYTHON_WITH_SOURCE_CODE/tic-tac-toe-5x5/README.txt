This program implement the game tic tac toe for one player (against the computer).
In the beginning of the game I simulate coin flip to decide who is starting.
I used minmax algorithm and iterative deep search to choose the computer move, I timed the
search for 5 seconds. I used evaluation function which score +1 for a line with 1 'O' and the rest
mpty rubrics, +10 for a line with 2 'O' and the rest empty rubrics, +100 for 3 'O' and the rest
is empty rubrics, +1000 for 4 'O' and the rest is empty rubrics, +(10^4+11^4) for 5 'O'