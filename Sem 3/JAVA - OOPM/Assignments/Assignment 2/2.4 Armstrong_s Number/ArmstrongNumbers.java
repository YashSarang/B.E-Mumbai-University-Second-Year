import java.lang.*;
import java.util.Scanner;

class ArmstrongNumbers
{
	public static void main(String[] args)
	{
		Scanner input = new Scanner(System.in);
		System.out.print("\n Enter the number to check if it is an Armstrong Number: ");
		int num = input.nextInt();
		int temp = num;
		int soc = 0;

		while(num != 0)
		{
			int remainder = num % 10;
			System.out.println(remainder);	
			soc = soc + (remainder*remainder*remainder);
			num = num/10;
		}	
		if(temp == soc)
		{
			System.out.println(temp + " is an Armstrong Number.");	
		}
		else
		{
			System.out.println(temp + " is not an Armstrong Number.");
		
		}
	}
}