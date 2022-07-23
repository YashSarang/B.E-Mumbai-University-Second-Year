#include <graphics.h>
#include <conio.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void main()
{
	int gd=DETECT,gm,i,errorcode;
	float x,y,dx,dy;
	int steps,r;
	int x0,x1,y0,y1;
	int color_val;
	initgraph(&gd,&gm,"C:\\TURBOC3\\BGI");
	errorcode=graphresult();
	if(errorcode!=0)
	{
		printf("Graphics error:%s\n",grapherrormsg(errorcode));
		printf("press any key to halt:");
		getch();
		exit(1);
	}
	setbkcolor(BLACK);
	x0=0,y0=0,x1=8,y1=4;
	dx=(float)(x1-x0);
	dy=(float)(y1-y0);
	steps=0;

	if(dx>=dy)
	{
		steps=dx;
	}

	else
	{
		steps=dy;
	}

	dx=dx/steps;
	dy=dy/steps;
	x=x0;
	y=y0;
	i=1;

	while(i<=steps)
	{
		putpixel(x,y,RED);
		x+=dx;
		y+=dy;
		i+=1;
	}

	//displaying thick lines
	x=x0;
	y=y0;
	getch();
	cleardevice();
	outtextxy(150,50,"THICK LINE");

	for(steps;steps>0;steps--)
	{
		x=x+dx;
		y=y+dy;
		delay(20);
		putpixel(floor(x+0.5),floor(y+0.5),WHITE);
		putpixel(floor(x+1.5),floor(y+1.5),WHITE);
		putpixel(floor(x-1.5),floor(y-1.5),WHITE);
	}

	//displaying dashed lines
	x=x0;
	y=y0;
	getch();
	cleardevice();
	outtextxy(150,50,"DASHED LINE");

	for(steps;steps>0;steps--)
	{
		x=x+dx;
		y=y+dy;
		delay(20);

		if(steps%2==0)
		{
			putpixel(floor(x+0.5),floor(y+0.5),WHITE);
		}
	}

	//displaying colored lines
	x=x0;
	y=y0;
	color_val=0;
	getch();
	cleardevice();
	outtextxy(150,50,"COLOR LINE");

	for(steps;steps>0;steps--)
	{
		x=x+dx;
		y=y+dy;
		delay(20);
		putpixel(floor(x+0.5),floor(y+0.5),color_val);
		color_val++;

		if(color_val==15)
			color_val=0;
	}
	getch();
	closegraph();
}
