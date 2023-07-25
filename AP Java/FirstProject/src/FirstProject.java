import java.util.Scanner;

public class FirstProject
{
    public static void main(String[] args)
    {
        //System.in refrences the kewyboard... allows input to be scanned in from keyboard
        Scanner myScanner = new Scanner(System.in);
        System.out.print("Enter your first name ");
        String firstName = myScanner.nextLine();
        System.out.println();
        System.out.print("Enter your last name ");
        String lastName = myScanner.nextLine();
        System.out.println();
        System.out.print("Enter your age as a whole number ");
        int age = myScanner.nextInt();
        System.out.println();
        System.out.print("Are you female? Answer True or False.");
        boolean female = myScanner.nextBoolean();
        String title;
        System.out.println();

        if (female)
             title = "Ms.";
        else
            title = "Mr.";


        /* **THREE WAYS TO DECLARE AND INITIALIZE ARRAYS**

            1. int otherNumbers[] = new int[5];
            2. int[] otherNumbers = {1,2,3,4,5,6,7};
            3. int[] numbers = new int [7];
        */


        int[] otherNumbers = {1,2,3,4,5,6,7};
        int[] numbers = new int [7];
        numbers[6] = 20;
        numbers[2] = 7;
        numbers[0] = 2;

        double average = forAvg(numbers);
        double average2 = whileAvg(otherNumbers);

        //String name = " Mattia";
        //System.out.println("Hello " + firstName + " " + lastName);
        String newName = title + firstName.substring(0,1) + "." + " " + lastName;
        System.out.println("Hello " + newName);
        System.out.println("You are " + age + " years old");
        //age++;
        //System.out.println("Next year you will be " + age);
        System.out.println("Next year you will be " + (age + 1));
        System.out.println("The average is " + average);
        System.out.println("The second average is " + average2);
    }

    public static double forAvg(int[] values)
    {
        int total = 0;
        for(int i=0; i < values.length; i++)
        {
            total += values[i];
        }
        return total/(double)values.length;
    }

    public static double whileAvg(int [] values)
    {
        int place = 0;
        int total = 0;

        while(place < values.length)
        {
            total += values[place];
            place++;
        }

        return total/(double)values.length;
    }
}

