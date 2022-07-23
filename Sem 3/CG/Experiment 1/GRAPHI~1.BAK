#include <stdio.h>
#include <graphics.h>
#include <stdlib.h>
#include <conio.h>

int main()
{
	int gdriver=DETECT, gmode, errorcode;
	int xmax, ymax;
	int x=50, y=150;
	char buffer[20];
	initgraph(&gdriver,&gmode,"C:\\TURBOC3\\BGI");
	errorcode=graphresult();

	if(errorcode!=0)
	{
		printf("Graphics error: %s\n",grapherrormsg(errorcode));
		printf("press any key to halt:");
		getch();
		exit(1);
	}

	setcolor(getmaxcolor());
	xmax=getmaxx();
	ymax=getmaxy();
	line(xmax/2,0,xmax/2,ymax);
	line(0,ymax/2,xmax,ymax/2);
	outtextxy(xmax-150,ymax-50,"Yash Sarang");
	outtextxy(xmax-95,ymax-40,"D6AD - 47");
	setcolor(RED);
	circle(100,100,30);
	outtextxy(100,150,"CIRCLE X=100 Y=100");
	setcolor(GREEN);
	rectangle(350,100,400,200);
	outtextxy(350,205,"RECTANGLE");
	setcolor(BLUE);
	ellipse(200,300,0,360,100,50);
	outtextxy(150,360,"ELLIPSE");
	setcolor(getmaxcolor());
	rectangle(400,300,500,400);
	outtextxy(400,ymax-70,"SQUARE");
	getch();
	cleardevice();

	for(x=50;x<=400;x++)
	{
		circle(x,y,50);
		sprintf(buffer,"X=%d,Y=%d",x,y);
		delay(5);

		if(x==50)
		{
			outtextxy(40,85,buffer);
			outtextxy(xmax-200,ymax-50,"Yash Sarang");
			outtextxy(xmax-180,ymax-40,"D6AD - 47");
			getch();
		}

		if(x==400)
		{
			outtextxy(350,85,buffer);
			outtextxy(xmax-200,ymax-50,"Yash Sarang");
			outtextxy(xmax-180,ymax-40,"D6AD - 47");
			getch();
		}
		cleardevice();
	}

	getch();
	closegraph();
	return 0;
}