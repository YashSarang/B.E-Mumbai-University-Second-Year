import java.util.Scanner;
import java.lang.*;
import java.math.*;

class SineAndCosine
{	
    	public static long fact(int number) 
	{
        	long result = 1;
	        for (int factor = 2; factor <= number; factor++) 
		{
			result *= factor;
        	}
        	return result;
    	}
	public static double Sin(double angle)
	{
		double temp,sin=0.0;
		for(int i=1 ; i>=0 ; i+=4) 
		{
			temp = Math.pow(angle,i)/fact(i);
			if(i>=25)
				break;
			else
				sin = sin + temp;
		}	
		for(int i=3 ; i>=0 ; i+=4) 
		{
			temp = Math.pow(angle,i)/fact(i);
			if(i>=25)
				break;
			else
				sin = sin - temp; 
		}	
		return sin;
	}
	public static double Cos(double angle)
	{
		double temp,cos=0.0;
		for(int i=0 ; i>=0 ; i+=4) 
		{
			temp = Math.pow(angle,i)/fact(i);
			if(i>=25)
				break;
			else
				cos = cos + temp;
		}	
		for(int i=2 ; i>=0 ; i+=4) 
		{
			temp = Math.pow(angle,i)/fact(i);
			if(i>=25)
				break;
			else
				cos = cos - temp; 
		}	
		return cos;	
	}
	public static void main(String[] args)
	{
		Scanner input= new Scanner(System.in);
		System.out.print("Enter the measurement of angle (in radians): ");
		double angle= input.nextDouble();
		
		System.out.println("Sine of " + angle + " is " + Sin(angle) + " \n Cosine of " + angle + " is " + Cos(angle) );
	}
}
