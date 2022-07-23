import java.lang.*;
import java.util.*;
import java.lang.Math;
class Roots_Of_Quadratic
{
	public static void main(String args[])
	{
		byte a,b,c;
		int D;
		Scanner input = new Scanner(System.in);
		System.out.println("If the equation is in the form ax^2 + bx + c = 0 \n Enter a : ");
		a = input.nextByte();
		System.out.println("Enter b : ");
		b = input.nextByte();
		System.out.println("Enter c : ");
		c = input.nextByte();
		double x1,x2;
		D = (b*b)-(4*a*c);
		if (D<0)
		{
			System.out.println("Roots are imaginary!");
			x1 = (double) ((-1.0*b)/(2*a));
			x2 = (Math.sqrt(-D)/(2.0*a));
			System.out.println("1st imaginary root : " + x1 + "+ i" + x2);
			System.out.println("2nd imaginary root : " + x1 + "- i" + x2);
		}
		else if(D==0)
		{
			x1=(-b)/(2*a);
			System.out.println("Both the Roots are equal and they are : " + x1);
		}
		else
		{
			x1=((-b)+Math.sqrt(D))/(2*a);
			x2=((-b)-Math.sqrt(D))/(2*a);
			System.out.println("Roots are real and they are : " + x1 + " and " + x2);
		}
	}
}