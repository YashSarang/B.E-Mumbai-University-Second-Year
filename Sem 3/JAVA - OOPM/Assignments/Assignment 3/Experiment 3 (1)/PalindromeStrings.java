import java.util.Scanner;
import java.lang.String;

class PalindromeStrings
{	
	public static int fun(String str)
	{
		int n = str.length()-1;
		for(int i=0;i<n/2;i++)
		{
			if(str.charAt(i) != str.charAt(n-i))
				return 0;
	  	}	

		return 1;
	}

	public static void main(String[] args)
	{
	
		Scanner in = new Scanner(System.in);
		  
		System.out.print("Enter a string: ");
		String str = in.next();
		  
		int flag = fun(str);

		if(flag == 1)
			System.out.println(str+ " is a palindrome");
		else 
	     		System.out.println(str+ " is not a palindrome");

		System.out.println("Capitalized string is "+ str.toUpperCase());
	}
}
