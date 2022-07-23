let size=100;
let board;
let turn="X";
let game=true;
function setup(){
    let canvas=createCanvas(300,300);
    canvas.mousePressed(play);
    board=new Board();
}
function draw(){
    background(0);
    board.show();
}
function play(){
    if(!game){
        return;
    }
    let validClick=false;
    for(let i in board.cells){
        // 5 is used to avoid clicking on lines
        if(collidePointRect(mouseX,mouseY,board.cells[i].x+5,board.cells[i].y+5,size-5,size-5) && !board.cells[i].status){
            board.cells[i].status=turn;
            validClick=true;
            // if(turn==="X")
            //     turn="O";
            // else
            //     turn="X";
        }
    }
    if(!validClick){
        return;
    }
    let state=getState();
    let win=winCheck(state);
    if(win==="X"){
        alert("X Won!!");
        noLoop();
        game=false;
        return;
    }
    else if(win==="O"){
        alert("O Won!!");
        noLoop();
        game=false;
        return;
    }
    else if(win==="D"){
        alert("Game Over");
        noLoop();
        game=false;
        return;
    }
    // console.log(state);
    let depth=0;
    let newState=computerMove(state,true,depth,-99999,99999)[1];
    let index=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            board.cells[index].status=newState[i][j];
            index++;
        }
    }
    state=getState();
    win=winCheck(state);
    if(win==="X"){
        alert("X Won!!");
        noLoop();
        game=false;
        return;
    }
    else if(win==="O"){
        alert("O Won!!");
        noLoop();
        game=false;
        return;
    }
    else if(win==="D"){
        alert("Game Over");
        noLoop();
        game=false;
        return;
    }
}
function winCheck(state){
    if((state[0][2]=="X" && state[1][1]=="X" && state[2][0]=="X") ||(state[0][0]=="X" && state[1][1]=="X" && state[2][2]=="X") ||(state[0][0]=="X" && state[0][1]=="X" && state[0][2]=="X") || (state[1][0]=="X" && state[1][1]=="X" && state[1][2]=="X") || (state[2][0]=="X" && state[2][1]=="X" && state[2][2]=="X") ||(state[0][0]=="X" && state[1][0]=="X" && state[2][0]=="X") || (state[0][1]=="X" && state[1][1]=="X" && state[2][1]=="X") || (state[0][2]=="X" && state[1][2]=="X" && state[2][2]=="X") ){
        return "X";
    }
    else if((state[0][2]=="O" && state[1][1]=="O" && state[2][0]=="O") ||(state[0][0]=="O" && state[1][1]=="O" && state[2][2]=="O") ||(state[0][0]=="O" && state[0][1]=="O" && state[0][2]=="O") || (state[1][0]=="O" && state[1][1]=="O" && state[1][2]=="O") || (state[2][0]=="O" && state[2][1]=="O" && state[2][2]=="O") ||(state[0][0]=="O" && state[1][0]=="O" && state[2][0]=="O") || (state[0][1]=="O" && state[1][1]=="O" && state[2][1]=="O") || (state[0][2]=="O" && state[1][2]=="O" && state[2][2]=="O") ){
        return "O";
    }
    if(isBoardFilled(state)){
        return "D";
    }
    return false;
}
function isBoardFilled(state){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(state[i][j]==null)
                return false;
        }
    }
    return true;
}
function getState(){
    let state=[];
    let index=0;
    for(let i=0;i<3;i++){
        let temp=[];
        for(let j=0;j<3;j++){
            temp.push(board.cells[index].status);
            index++;
        }
        state.push(temp);
    }
    return state;
}
function computerMove(state,max,depth,alpha,beta){
    // minimax logic goes here
    let win=winCheck(state);
    if(win==="X"){
        return [-10,state,depth];
    }
    else if(win==="O"){
        return [10,state,depth];
    }
    else if(win==="D"){
        return [0,state,depth];
    }
    if(max){
        let maxState;
        let maxScore=-9999;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(state[i][j]==null){
                    state[i][j]="O";
                    if(beta<=alpha){
                        state[i][j]=null;
                        continue;
                    }
                    let temp=computerMove(state,false,depth+1,alpha,beta);
                    if((temp[0]-temp[2])>maxScore){
                        maxScore=temp[0]-temp[2];
                        alpha=maxScore;
                        maxState=JSON.parse(JSON.stringify(state));
                    }
                    state[i][j]=null;
                }
            }
        }
        return [maxScore,maxState,depth];
    }
    else{
        let minState;
        let minScore=9999;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(state[i][j]==null){
                    state[i][j]="X";
                    if(beta<=alpha){
                        state[i][j]=null;
                        continue;   
                    }
                    let temp=computerMove(state,true,depth+1,alpha,beta);
                    if((temp[0]+temp[2])<minScore){
                        minScore=temp[0]+temp[2];
                        beta=minScore;
                        minState=JSON.parse(JSON.stringify(state));
                    }
                    state[i][j]=null;
                }
            }
        }
        return [minScore,minState,depth];
    }
}