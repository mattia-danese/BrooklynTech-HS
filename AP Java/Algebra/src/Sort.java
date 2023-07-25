public class Sort
{
    //INTEGERS
    public static void ascendingSort(int[] numbers)
    {
        for(int i = 0; i < numbers.length - 1; i++)
        {
            int lowest = i;
            for(int a = i + 1; a < numbers.length; a++)
                if(numbers[a] < numbers[lowest])
                    lowest = a;
            swap(i, lowest, numbers);
        }
    }

    public static void desecendingSort(int[] numbers)
    {
        for(int i = 0; i < numbers.length - 1; i++)
        {
            int highest = i;
            for(int a = i + 1; a < numbers.length; a++)
                if(numbers[a] > numbers[highest])
                    highest = a;
            swap(i, highest, numbers);
        }
    }

    public static void swap(int indexA, int indexB, int[] numbers)
    {
        int temp = numbers[indexA];
        numbers[indexA] = numbers[indexB];
        numbers[indexB] = temp;
    }

    public static String toString(int [] numbers)
    {
        String output = "";
        for(int num: numbers)
            output = output + num + " ";
        return output;
    }

    //STRINGS
    public static void ascendingSort(String[] words)
    {
        for(int i = 0; i < words.length - 1; i++)
        {
            int lowest = i;
            for(int a = i + 1; a < words.length; a++)
                if(words[a].compareTo(words[lowest]) < 0)
                    lowest = a;
            swap(i, lowest, words);
        }
    }

    public static void desecendingSort(String[] words)
    {
        for(int i = 0; i < words.length - 1; i++)
        {
            int highest = i;
            for(int a = i + 1; a < words.length; a++)
                if(words[a].compareTo(words[highest]) > 0)
                    highest = a;
            swap(i, highest, words);
        }
    }

    public static void swap(int indexA, int indexB, String[] words)
    {
        String temp = words[indexA];
        words[indexA] = words[indexB];
        words[indexB] = temp;
    }

    public static String toSring(String[] words)
    {
        String output = "";
        for(String wrd: words)
            output = output + wrd + " ";
        return output;
    }

    //COORDS
    public static void ascendingSort(Coords[] coords) //sortByDistanceToOrigin - ascending
    {
        for(int i = 0; i < coords.length - 1; i++)
        {
            int lowest = i;
            for(int a = i + 1; a < coords.length; a++)
                if(coords[a].distanceFromOrigin() < coords[lowest].distanceFromOrigin())
                    lowest = a;
            swap(i, lowest, coords);
        }
    }

    public static void desecendingSort(Coords[] coords) //sortByDistanceToOrigin - descending
    {
        for(int i = 0; i < coords.length - 1; i++)
        {
            int highest = i;
            for(int a = i + 1; a < coords.length; a++)
                if(coords[a].distanceFromOrigin() > coords[highest].distanceFromOrigin())
                    highest = a;
            swap(i, highest, coords);
        }
    }

    public static void swap(int indexA, int indexB, Coords[] coords)
    {
        Coords temp = coords[indexA];
        coords[indexA] = coords[indexB];
        coords[indexB] = temp;
    }

    public static String toString(Coords[] coords)
    {
        String output = "";
        for(Coords cod: coords)
            output = output + cod + " ";
        return output;
    }
}

