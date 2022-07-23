import java.util.Scanner;

class Symmetric
	{

	public static int sym(int[][] arr, int n){
	
	  for(int i=0;i<n;i++){
	     for(int j=0;j<n;j++){
		if(arr[i][j] != arr[j][i])
		   return 0;
	     }
	  } 
	   return 1;
	}

	public static void main(String[] args){
	
	  Scanner in = new Scanner(System.in);
	  
	  System.out.println("Enter the no. of rows and columns: ");
	  int n = in.nextInt();
	  int[][] arr = new int[10][10];

	  System.out.print("Enter the values: ");

	  for(int i=0;i<n;i++){
	     for(int j=0;j<n;j++){
		arr[i][j] = in.nextInt();
	     }
	  }
	  int flag = sym(arr,n);

	  if(flag == 1)
	 	System.out.println("Matrix is symmetric");
	  else
	 	System.out.println("Matrix is not symmetric");
	}
}
