import java.lang. *;
import java.util.*;
class StringFunctions
{
	public static void main(String[] args)
	{	
		Scanner in=new Scanner(System.in);			//Scanner Initialization

		System.out.print("\n\n Input the first string :");	//Vadapav
		String str = in.next();
	
		System.out.print("\n Input the second string : ");	//Katchori
		String str2 = in.next();

		System.out.print("\n \n Using equals() we get: ");					//1
		System.out.println(str.equals(str2));

		System.out.print("\n Using equalsIgnoreCase() we get: ");			//2
		System.out.println(str.equalsIgnoreCase(str2));

		String str3=str.concat(str2);
		System.out.print("\n Using concat() we get: ");					//3
		System.out.println(str3);

		System.out.print("\n Using compareTo() we get: ");				//4
		System.out.println(str.compareTo(str2));

		System.out.print("\n Using compareToIgnoreCase() we get: ");			//5
		System.out.println(str.compareToIgnoreCase(str2));
	
		System.out.print("\n Using substring(int beginIndex) we get: ");		//6
		System.out.println(str.substring(3));

		System.out.print("\n Using substring(int beginIndex, int endIndex) we get: ");	//7
		System.out.println(str.substring(3,6));

		System.out.print("\n Using toUpperCase() we get: ");				//8
		System.out.println(str.toUpperCase());

		System.out.print("\n Using to LowerCase() we get: ");				//9
		System.out.println(str.toLowerCase());

		System.out.print("\n Using trim(): ");						//10
		System.out.println(str.trim());
	
		System.out.print("\n The length of string is: ");				//11
		System.out.println(str.length());	

		System.out.print("\n Using charAt(int index): ");				//12
		System.out.println(str.charAt(2));

	}
}
