class Cell{
    constructor(i,j){
        this.r=i;
        this.c=j;
        this.x=j*(size);
        this.y=i*(size);
        this.status=null;//possible values are X or O
    }
    show(){
        stroke(255);
        noFill();
        rect(this.x,this.y,size,size);
        textSize(60);
        fill(255);
        textAlign(CENTER,CENTER)
        if(this.status)
            text(this.status,this.x+size/2,this.y+size/2)
    }
}