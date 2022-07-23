import java.lang.*;
import java.lang.Math;
import java.util.*;
class prime_check
{
	public static void main(String args[])
	{
		Scanner input = new Scanner(System.in); //System.in is a standard input stream.
		System.out.print("Enter the integer number to check - ");
		int a= input.nextInt();
		int x=0;
		if (a<2)
		{
			System.out.println(a+" is not a Prime Number");	
		}
		else if (a==2)
		{
			System.out.println(a + " is a Prime Number");
		}
		else
		{
			for(int i=2;i<=(int) a/2;i++)
			{
				if (a%i==0)
				{
					x++;
				}
			}
			if (x>0)
			{
				System.out.println(a+" is not a Prime Number with "+x+" factors");
			}
			else
			{
				System.out.println(a+" is a Prime Number");
			}
		}
	}
}