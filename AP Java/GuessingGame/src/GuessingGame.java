import java.util.Scanner;

public class GuessingGame
{
    public static void main(String[] args)
    {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Choose a level 1 to 4.");
        int[] results = new int[0];
        int game = 1;

        StartUp(myScanner, results, game);
    }

    public static void StartUp(Scanner user, int[] results, int game)
    {
        int level;

        System.out.println("1. Beginner Level (numbers between 1 and 10)");
        System.out.println("2. Intermediate Level (numbers between 1 and 100)");
        System.out.println("3. Advanced Level (numbers between 1 and 1,000)");
        System.out.println("4. Expert Level (numbers between 1 and 10,000)");

        level = user.nextInt();


        while (level < 1 || level > 4)
        {
            System.out.println("That's not a valid level. Please choose between Levels 1 and 4");
            level = user.nextInt();
        }

        ChooseLevel(user, results, game, level);
    }

    public static void ChooseLevel(Scanner user, int[] results, int game, int level)
    {
        double random;
        double high;

            random = Math.random() * Math.pow(10,level) + 1;
            high = Math.pow(10,level);

            System.out.println("Guess an integer between 1 and " + (int)high);
            Guessing((int) random, user, level, results, game);
    }


    public static void Guessing(int random, Scanner user, int level, int[] results, int game) {
        //System.out.println("RANDOM NUMBER IS " + random);

        int guessIdx = 0;
        int guess;

        do
        {
            guess = user.nextInt();
            guessIdx++;
            if (guess < random)
                System.out.println("The number is greater than " + guess);

            if (guess > random)
                System.out.println("The number is less than " + guess);
        }
        while (random != guess);

        if (guessIdx > 1)
            System.out.println("Good Job! You guessed the right number in " + guessIdx + " guesses!");
        else
            System.out.println("Good Job! You guessed the right number in 1 guess!");

        results = addElement(results, guessIdx);
        PlayAgain(user, level, results, game);
    }

    public static void PlayAgain(Scanner user, int level, int[] results, int game)
    {
        String answer;
        System.out.println("Yes or no, do you want to play again?");
        user.nextLine(); //not sure why I need this
        answer = user.nextLine();

        if (answer.equalsIgnoreCase("yes"))
        {
            game++;
            ChooseLevel(user, results, game, level);
        }
        else
            GameEnd(results);
    }

    public static void GameEnd(int[] results)
    {
        System.out.println("RESULTS");
        for (int i = 0; i < results.length; i++)
        {
            if (results[i] == 0)
                break;
            else
            {
                if (results[i] == 1)
                    System.out.println("Game " + (i + 1) + ": 1 guess");
                else
                    System.out.println("Game " + (i + 1) + ": " + results[i] + " guesses");
            }
        }
    }

    public static int[] addElement(int[] arr, int value)
    {
        int[] temp = new int[arr.length + 1];
        for (int i = 0; i < arr.length; i++)
        {
            temp[i] = arr[i];
        }
        temp[temp.length - 1] = value;
        return temp;
    }

}
