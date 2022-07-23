#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

//Job Structure 
typedef struct {
    char id;
    int deadline;
    int profit;
 
}Job;

/* function to compare two jobs based on their profit. 
   returns true if job b's profit < job a's profit */
int compareJob(const Job *a, const Job *b){
    return b->profit - a->profit;
}
 

//function finds the best job sequence
void bestJob(Job jobs[],int sizeOfJobs){
    //null char array
    char jobsToDo[5]= {'\0'}; 

    for(int i=0, k=0; i<sizeOfJobs; i++){
        k = jobs[i].deadline-1;
        //Searching backwards the empty date nearest to deadline 
        while(jobsToDo[k] != '\0' && k >= 0){
            k--;
        }
        
        //if empty date found, set the job
        if(k != -1)
            jobsToDo[k]= jobs[i].id;
    }
    
    //output the final job sequence
    printf("\nBest order and jobs to do is: ");
    int idx=0;
    while(jobsToDo[idx] != '\0'){
        printf("%c ",jobsToDo[idx]);
        idx++;
    }
}
 
//function to display the jobs table
void display(Job jobs[], int n){
    printf("Job Id:     \t");
    for(int i=0; i<n; i++){
        printf("%c \t",jobs[i].id);
    }
    printf("\n");
 
    printf("Job Deadline: \t");
    for(int i=0; i<n; i++){
        printf("%d \t",jobs[i].deadline);
    }
    printf("\n");
 
    printf("Job Profit: \t");
    for(int i=0; i<n; i++){
         printf("%d \t",jobs[i].profit);
    }
    printf("\n");
}

int main()
{   
    //intialize the jobs
    Job jobs[]=  {{'w', 1, 19}, {'v', 2, 100}, {'x', 2, 27},
                   {'y', 1, 25}, {'z', 3, 15}};
                   
    //display the jobs data
    display(jobs,5);
    
    //sorting jobs[] w.r.t their profit
    qsort(jobs,5,sizeof(jobs[0]),compareJob);
    
    bestJob(jobs,5);
    return 0;
}