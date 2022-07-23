/* Problem statement.
----------------------------------------------------
Assume n classes are in FE
m1, m2 .... mn  is count of students in each class.

store Test 1 marks of each student.
(make optimized use of memory)

Find out roll number of topper from each class.
Find out average marks of each class.
Find out overall topper.                            */

#include<stdio.h>
#include<stdlib.h>

void Final_report(int **Marks_Test1, int *No_of_Students, int Total_Classes)
{
    int Average[Total_Classes+1];
    int Topper[Total_Classes+1][2];
    Topper[0][0]=0;
    Topper[0][1]=0;

    int i,j;
    for(i=1;i<=Total_Classes;i++)
    {
        Topper[i][0]=0;
        Average[i] = Marks_Test1[i][0]/No_of_Students[i];
        printf("\nAverage marks of class %d is %d.",i,Average[i]);

        for(j=1;j<=No_of_Students[i];j++)
        {
            if (Marks_Test1[i][j]> Topper[i][0])
            {
                Topper[i][1]=j;
                Topper[i][0]=Marks_Test1[i][j];
            }
        }
        printf("\nTopper of Class %d is %d with %d marks.\n",i,Topper[i][1],Topper[i][0]);

        if (Topper[i][0]> Topper[0][0])
        {
            Topper[0][1]=i;
            Topper[0][0]=Topper[i][0];
        }
    }
    printf("\n The Overall Topper is of Class %d with %d marks.\n",Topper[0][1],Topper[0][0]);
}
int main()
{
    int Total_Classes;                                          // To Store the total number of Class
    printf("\nEnter the total Number of Classes : ");
    scanf("%d",&Total_Classes);

    int *No_of_Students;
    //int No_of_Students[Total_classes + 1];                     // No_of_Students[0] is number of students in first class and so on
    No_of_Students=(int *)malloc((Total_Classes+1)*sizeof(int));// create an pointer array of size((Total_Classes+1)) which points to each Class
    No_of_Students[0]= Total_Classes;                           //We will store the 0th index as the sum in the full program.
                                                                // or use *No_of_Students = Total Classes
    int **Marks_Test1;                                          // Marks acquired by the student in Test 1
    //int Marks_Test1[][];
    Marks_Test1   = (int **) malloc((Total_Classes+1)*sizeof(int *));
    //This is the first dimension of this array which stores all pointers to the classes.

    for(int i=1;i<=Total_Classes;i++)
    {
        printf("\nEnter the total Number of Students in class %d : ",i);

        scanf("%d",(No_of_Students+i));
        //or use scanf("%d",&No_of_Students[i]);

        //This stores the total number of students in each class in the No_of_Students array


        // Creating the 2nd dimension

        //or use *(Marks_Test1+i) = (int *)malloc((*(No_of_Students+i))*(Total_Classes+1));
        Marks_Test1[i] = (int *)malloc((No_of_Students[i]+1)*sizeof(int));
        // create an array of pointers of size(No_of_students) which points to each student to store its respective Marks.

        //Take input of Marks_Test1 for class i of 2nd dimension
        Marks_Test1[i][0]= 0;

        for(int j=1;j<=No_of_Students[i];j++)       //for(j=1;j<=*(No_of_Students+i);j++)
        {
            printf("\nEnter marks of Class %d, Roll No.%d : ",i,j);
            scanf("%d",&Marks_Test1[i][j]);
            //scanf("%d",*(Marks_Test1[i]+j));
            //scanf("%d",*(*(Marks_test1+i)+j));
            Marks_Test1[i][0]+= Marks_Test1[i][j];
        }
    }
    Final_report(Marks_Test1,No_of_Students,Total_Classes);
    return 0;
}

