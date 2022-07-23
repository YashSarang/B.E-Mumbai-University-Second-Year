class Board{
    constructor(){
        this.cells=[];
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                this.cells.push(new Cell(i,j))
            }
        }
    }
    show(){
        for(let i in this.cells)
            this.cells[i].show();
    }
}