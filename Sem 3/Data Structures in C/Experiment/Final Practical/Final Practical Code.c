#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};

struct node *head1 = NULL;
struct node *head2 = NULL;
struct node *head3 = NULL;

void insertAtBeg(struct node **head, int data)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->next = NULL;
    if (*head == NULL)
    {
        *head = temp;
    }
    else
    {
        temp->next = *head;
        *head = temp;
    }
}

void insertAtEnd(struct node **head, int data)
{
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp->data = data;
    temp->next = NULL;
    if (*head == NULL)
    {
        *head = temp;
    }
    else
    {
        struct node *p = *head;
        while (p->next != NULL)
        {
            p = p->next;
        }
        p->next = temp;
    }
}

void deleteAtBeg(struct node **head)
{
    if (*head == NULL)
    {
        printf("List is empty\n");
    }
    else
    {
        struct node *temp = *head;
        *head = (*head)->next;
        insertAtBeg(&head3, temp->data);
    }
}

void deleteAtEnd(struct node **head)
{
    if (*head == NULL)
    {
        printf("List is empty\n");
    }
    else
    {
        struct node *p = *head;
        struct node *temp = *head;
        while (p->next != NULL)
        {
            temp = p;
            p = p->next;
        }
        temp->next = NULL;
        insertAtBeg(&head3, p->data);
    }
}

void display(struct node **head)
{
    struct node *p = *head;
    while (p != NULL)
    {
        printf("%d ", p->data);
        p = p->next;
    }
}


struct Node
{
    int priority;
    int info;
    struct Node *next;
};

struct Node *front = NULL;

void insert(int data, int priority)
{
    struct Node *temp, *q;

    temp = (struct Node *)malloc(sizeof(struct Node));
    temp->info = data;
    temp->priority = priority;

    if (front == NULL || priority < front->priority)
    {
        temp->next = front;
        front = temp;
    }
    else
    {
        q = front;
        while (q->next != NULL && q->next->priority <= priority)
            q = q->next;
        temp->next = q->next;
        q->next = temp;
    }
}

void del()
{
    struct Node *temp;

    if (front == NULL)
        printf("Queue Underflow\n");
    else
    {
        temp = front;
        printf("Deleted item is %d\n", temp->info);
        front = front->next;
        insertAtBeg(&head3, temp->info);
    }
}

void displayQueue(struct Node **front)
{
    struct Node *p = *front;
    while (p != NULL)
    {
        printf("%d ", p->info);
        p = p->next;
    }
}

int main()
{
        int choice,data=0;
        printf("Which list do you wanna access?\n 1. First\n 2. Second\n 3. Third\n");
        scanf("%d", &choice);

        if (choice==1)
        {
          int choice=0;
          printf("What do you wanna do in FIrst Linked List?\n 1. Display the list.\n 2. Insert at beginning.\n 3. Insert at end.\n 4. Delete at Start\n 5.Delete at End\n");
          scanf("%d", &choice);

          if(choice==1)
            display(&head1);
          else if(choice==2)
          {
            printf("Enter the element to enter: ");
            scanf("%d", &data);
            insertAtBeg(&head1, data);
          }
          else if(choice == 3)
          {
            printf("Enter the element to enter: ");
            scanf("%d", &data);
            insertAtEnd(&head1, data);
          }
          else if(choice == 4)
          {
            deleteAtBeg(&head1);
          }
          else if (choice == 5)
          {
            deleteAtEnd(&head1);
          }
          else
            printf("Please enter a valid choice.\n");
        }

        if (choice==2)
        {
          int choice,priority=0;
          printf("What do you wanna do in Second Linked List?\n 1. Display the list.\n 2. Insert an element.\n 3. Delete.\n");
          scanf("%d", &choice);

          if(choice==1)
            display(&head2);
          else if(choice==2)
          {
            printf("Enter the element and its priority to enter: ");
            scanf("%d %d", &data, &priority);
            insert(data,priority);
          }
          else if(choice == 3)
          {
            del();
          }
          else
            printf("Please enter a valid choice.\n");
        }

        if (choice==3)
        {
          int choice=0;
          printf("What do you wanna do in Third Linked List?\n 1. Display the list.\n 2. Insert an element.\n 3. Delete at beginning.\n 4. Delete at End.\n");
          scanf("%d", &choice);

          if(choice==1)
            display(&head3);
          else if(choice==2)
          {
            printf("You cannot manually insert elements in this linked list.");
          }
          else if(choice == 3)
          {
            deleteAtBeg(&head3);
          }
          else if (choice == 4)
          {
            deleteAtEnd(&head3);
          }
          else
            printf("Please enter a valid choice.\n");
        }

        printf("Do you want to perform any more options? (y/n) :");
        scanf("%c",&input);

    return 0;
}
