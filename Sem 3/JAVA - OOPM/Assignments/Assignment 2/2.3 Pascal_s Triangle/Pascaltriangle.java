import java.lang.*;
import java.util.Scanner;

class PascalTriangle
{
	public static void main(String[] args)
	{
		Scanner input= new Scanner(System.in);
		System.out.print("\n Enter the number of rows you want in your Pascal's triangle: ");
		int n = input.nextInt();
		int arr[]= new int[n+2];
		arr[0]=1;

		System.out.println("The Pascal Triangle will be: ");		
		System.out.println(arr[0]);

		for(int i = 1; i < n ; i++)
		{
			for (int j = i; j >= 1 ; j--)
			{
				arr[j]=arr[j-1] + arr[j];
			}
			for (int k = 0; k <= i ; k++)
			{
				System.out.print(arr[k] + " " );
			}
			System.out.print("\n");	
		}

	}
}