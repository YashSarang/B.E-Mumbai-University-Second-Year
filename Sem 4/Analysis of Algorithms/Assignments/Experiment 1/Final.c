#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <sys/time.h>

#define LIMIT 100000

void selection_sort(int arr[], int n)
{
    int i, j, min_idx;
    int temp;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < n - 1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        //swap
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void selection_sort_2way(int arr[], int sizeof_arr)
{
    int i, j, min_idx, max_idx;
    int temp;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < sizeof_arr / 2; i++) // i < sizeof_arr for Descending order.(less efficient) Use reversing algo instead
    {
        // Find the minimum,maximum element in unsorted array
        min_idx = max_idx = i;
        for (j = i; j < (sizeof_arr - i); j++)
        {
            if (arr[j] < arr[min_idx])
                min_idx = j;
            if (arr[j] > arr[max_idx])
                max_idx = j;
        }

        if (max_idx == i && min_idx == (sizeof_arr - i - 1))
        {
            swap(&arr[max_idx], &arr[min_idx]);
        }

        else if (max_idx == i)
        {
            swap(&arr[max_idx], &arr[(sizeof_arr - i - 1)]);
            swap(&arr[min_idx], &arr[i]);
        }

        else
        {
            swap(&arr[min_idx], &arr[i]);
            swap(&arr[max_idx], &arr[(sizeof_arr - i - 1)]);
        }
    }
}

void insertion_sort(int arr[], int n)
{
    int i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main()
{

    int random_number;
    int arr1[LIMIT], arr2[LIMIT], arr3[LIMIT];

    srand((unsigned)time(0)); // To give a random seed to srand as time(0) is variable

    FILE *fp1, *fp2, *fp3, *fp4, *fp5; // 5 file pointers to point to our 5 data files
    clock_t start, end;

    //FOR 1st Data
    int var1 = 0;
    fp1 = fopen("numbers1.dat", "w");

    do //For generating the data
    {
        random_number = (int)(rand() % 1000); // %1000 chips off any excess in the number
        //printf("%d\n", random_number);
        fprintf(fp1, "%d\n", random_number);

        arr1[var1] = arr2[var1] = arr3[var1] = random_number;

        var1++;
    } while (var1 < LIMIT);
    fclose(fp1);

    double Selection_Time_1, Insertion_Time_1, Selection_Time_2way_1;

    start = clock();
    insertion_sort(arr1, LIMIT);
    end = clock();
    Insertion_Time_1 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort(arr2, LIMIT);
    end = clock();
    Selection_Time_1 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort_2way(arr3, LIMIT);
    end = clock();
    Selection_Time_2way_1 = (double)(end - start) / CLOCKS_PER_SEC;

    //FOR 2nd Data
    var1 = 0;
    fp2 = fopen("numbers2.dat", "w");
    do
    {
        random_number = (int)(rand() % 1000); // %1000 chips off any excess in the number
        //printf("%d\n", random_number);
        fprintf(fp2, "%d\n", random_number);

        arr1[var1] = arr2[var1] = arr3[var1] = random_number;

        var1++;
    } while (var1 < LIMIT);
    fclose(fp2);

    double Selection_Time_2, Insertion_Time_2, Selection_Time_2way_2;

    start = clock();
    insertion_sort(arr1, LIMIT);
    end = clock();
    Insertion_Time_2 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort(arr2, LIMIT);
    end = clock();
    Selection_Time_2 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort_2way(arr3, LIMIT);
    end = clock();
    Selection_Time_2way_2 = (double)(end - start) / CLOCKS_PER_SEC;

    //For 3rd data
    var1 = 0;
    fp3 = fopen("numbers3.dat", "w");
    do
    {
        random_number = (int)(rand() % 1000); // %1000 chips off any excess in the number
        //printf("%d\n", random_number);
        fprintf(fp3, "%d\n", random_number);

        arr1[var1] = arr2[var1] = arr3[var1] = random_number;

        var1++;
    } while (var1 < LIMIT);
    fclose(fp3);

    double Selection_Time_3, Insertion_Time_3, Selection_Time_2way_3;

    start = clock();
    insertion_sort(arr1, LIMIT);
    end = clock();
    Insertion_Time_3 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort(arr2, LIMIT);
    end = clock();
    Selection_Time_3 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort_2way(arr3, LIMIT);
    end = clock();
    Selection_Time_2way_3 = (double)(end - start) / CLOCKS_PER_SEC;

    //For 4th Data
    var1 = 0;
    fp4 = fopen("numbers4.dat", "w");
    do
    {
        random_number = (int)(rand() % 1000); // %1000 chips off any excess in the number
        //printf("%d\n", random_number);
        fprintf(fp4, "%d\n", random_number);

        arr1[var1] = arr2[var1] = arr3[var1] = random_number;

        var1++;
    } while (var1 < LIMIT);
    fclose(fp4);

    double Selection_Time_4, Insertion_Time_4, Selection_Time_2way_4;

    start = clock();
    insertion_sort(arr1, LIMIT);
    end = clock();
    Insertion_Time_4 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort(arr2, LIMIT);
    end = clock();
    Selection_Time_4 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort_2way(arr3, LIMIT);
    end = clock();
    Selection_Time_2way_4 = (double)(end - start) / CLOCKS_PER_SEC;

    //For 5th Data
    var1 = 0;
    fp5 = fopen("numbers5.dat", "w");
    do
    {
        random_number = (int)(rand() % 1000); // %1000 chips off any excess in the number
        //printf("%d\n", random_number);
        fprintf(fp1, "%d\n", random_number);

        arr1[var1] = arr2[var1] = arr3[var1] = random_number;

        var1++;
    } while (var1 < LIMIT);
    fclose(fp1);

    double Selection_Time_5, Insertion_Time_5, Selection_Time_2way_5;

    start = clock();
    insertion_sort(arr1, LIMIT);
    end = clock();
    Insertion_Time_5 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort(arr2, LIMIT);
    end = clock();
    Selection_Time_5 = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    selection_sort_2way(arr3, LIMIT);
    end = clock();
    Selection_Time_2way_5 = (double)(end - start) / CLOCKS_PER_SEC;

    // Print time taking for sorting by Selection Sort and Insertion Sort in tabular formatter
    printf("                | Selection Sort | Insertion Sort | Selection Sort(2 Way)|\n");
    printf("--------------------------------------------------------------------------------\n");
    printf("numbers_1.dat  |    %f |      %f |      %f       |\n", Selection_Time_1, Insertion_Time_1, Selection_Time_2way_1);
    printf("numbers_2.dat  |    %f |      %f |      %f       |\n", Selection_Time_2, Insertion_Time_2, Selection_Time_2way_2);
    printf("numbers_3.dat  |    %f |      %f |      %f       |\n", Selection_Time_3, Insertion_Time_3, Selection_Time_2way_3);
    printf("numbers_4.dat  |    %f |      %f |      %f       |\n", Selection_Time_4, Insertion_Time_4, Selection_Time_2way_4);
    printf("numbers_5.dat  |    %f |      %f |      %f       |\n", Selection_Time_5, Insertion_Time_5, Selection_Time_2way_5);

    return 0;
}