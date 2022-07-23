import java.lang.*;
import java.util.*;
class Fibonacci
{	
	public static void main(String args[])
	{
		Scanner input = new Scanner(System.in);
		System.out.print("Enter the number of terms you want in the FIbonacci series: ");
		int n = input.nextInt();
		
		int x[] = new int[n];
    		x[0] = 0;
    		x[1] = 1; 
    		for (int i = 2; i <= n-1; i++)
    		{
        		x[i] = x[i-1] + x[i-2];
    		}
		for(int i=0; i<n;i++)	
		{
			System.out.println(x[i]);
		}
	}
}