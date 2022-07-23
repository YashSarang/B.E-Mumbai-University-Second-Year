class Operators
{
	public static void main(String args[])
	{
		int option =1;
		int a, b;
		a = 10;
		b = 5;
		switch(option)
		{
			case 1:
				System.out.println("The value of a & b is "+ (a&b));
				System.out.println("The value of a | b is "+ (a|b));
				System.out.println("The value of a ^ b is "+ (a^b));
				System.out.println("The value of ~a is "+ ~a);
				System.out.println("The value of a<<2 is "+ (a<<2));
      				System.out.println("The value of a>>2 is "+ (a>>2));
        			break;

			case 2: 
			        System.out.println("The value of ((a>15) && (b<5)) is "+ ((a>15) && (b<5)));
	        		System.out.println("The value of ((a>5) || (b<15)) is "+ ((a>5) || (b<15)));
			        System.out.println("The value of !((a>25) == (b<5)) is "+ !((a>25) == (b<5)));
         			break;

			case 3: 
			        System.out.println("The value of a == b is " + (a == b));
				System.out.println("The value of a != b is " + (a != b));
				System.out.println("The value of a > b is " + (a > b));
				System.out.println("The value of a < b is " + (a < b));
				System.out.println("The value of a >= b is " + (a >= b));
				System.out.println("The value of a <= b is " + (a <= b));
        			break;

			default:
        			System.out.println("Invalid Input");
        			break;
    		}
	}
}
