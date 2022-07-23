#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <sys/time.h>

#define LIMIT 100000

int BinarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l) / 2;

        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return BinarySearch(arr, l, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        return BinarySearch(arr, mid + 1, r, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

int Binary2_3(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int mid = l + (r - l) * 2 / 3;

        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return Binary2_3(arr, l, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        return Binary2_3(arr, mid + 1, r, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

int TrinarySearch(int arr[], int l, int r, int x)
{
    if (r >= l)
    {
        int sep1 = l + (r - l) / 3;
        if (arr[sep1] == x)
            return sep1;

        int sep2 = l + (r - l) * 2 / 3;
        if (arr[sep2] == x)
            return sep2;

        // If the element is present at the middle itself

        // If element is smaller than sep1, then
        // it can only be present in left subarray
        if (arr[sep1] > x)
            return BinarySearch(arr, l, sep1 - 1, x);

        else if (arr[sep1] < x && x < arr[sep2])
            return BinarySearch(arr, sep1 + 1, sep2 - 1, x);

        // Else the element can only be present
        // in right subarray
        else
            return BinarySearch(arr, sep2 + 1, r, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

int main(void)
{
    clock_t start, end;

    FILE *fp11, *fp12, *fp13, *fp14, *fp15;
    int arr1[LIMIT], arr2[LIMIT], arr3[LIMIT], arr4[LIMIT], arr5[LIMIT];

    fp11 = fopen("numbers11.dat", "r");
    fp12 = fopen("numbers12.dat", "r");
    fp13 = fopen("numbers13.dat", "r");
    fp14 = fopen("numbers14.dat", "r");
    fp15 = fopen("numbers15.dat", "r");

    int var1 = 0;
    int num;
    while (fscanf(fp11, "%d", &num) >= 0)
    {
        arr1[var1] = num;
        var1++;
    }
    var1 = 0;
    while (fscanf(fp12, "%d", &num) >= 0)
    {
        arr2[var1] = num;
        var1++;
    }
    var1 = 0;
    while (fscanf(fp13, "%d", &num) >= 0)
    {
        arr3[var1] = num;
        var1++;
    }
    var1 = 0;
    while (fscanf(fp14, "%d", &num) >= 0)
    {
        arr4[var1] = num;
        var1++;
    }
    var1 = 0;
    while (fscanf(fp15, "%d", &num) >= 0)
    {
        arr5[var1] = num;
        var1++;
    }

    double Binary_Time, Binary2_3_Time, Trinary_Time;

    start = clock();
    BinarySearch(arr1, 0, LIMIT - 1, 500);
    BinarySearch(arr1, 0, LIMIT - 1, 250);
    BinarySearch(arr1, 0, LIMIT - 1, 0);
    BinarySearch(arr1, 0, LIMIT - 1, 999);
    int x = BinarySearch(arr1, 0, LIMIT - 1, 69);
    end = clock();

    Binary_Time = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    Binary2_3(arr1, 0, LIMIT - 1, 500);
    Binary2_3(arr1, 0, LIMIT - 1, 250);
    Binary2_3(arr1, 0, LIMIT - 1, 999);
    int y = Binary2_3(arr1, 0, LIMIT - 1, 69);
    Binary2_3(arr1, 0, LIMIT - 1, 0);
    end = clock();

    Binary2_3_Time = (double)(end - start) / CLOCKS_PER_SEC;

    start = clock();
    TrinarySearch(arr1, 0, LIMIT - 1, 500);
    TrinarySearch(arr1, 0, LIMIT - 1, 250);
    TrinarySearch(arr1, 0, LIMIT - 1, 0);
    TrinarySearch(arr1, 0, LIMIT - 1, 999);
    int z = TrinarySearch(arr1, 0, LIMIT - 1, 69);
    end = clock();

    Trinary_Time = (double)(end - start) / CLOCKS_PER_SEC;

    printf("\n| Binary Search | BInary 2/3 Search | Trinary Search |\n");
    printf("------------------------------------------------------\n");
    printf("|     %.3f     |       %.3f       |     %.3f      |\n", Binary2_3_Time, Binary2_3_Time, Trinary_Time);
    printf("------------------------------------------------------\n %d %d %d", x, y, z);
    // x,y,z for checking if the algortihm executed

    fclose(fp11);
    fclose(fp12);
    fclose(fp13);
    fclose(fp14);
    fclose(fp15);

    return 0;
}