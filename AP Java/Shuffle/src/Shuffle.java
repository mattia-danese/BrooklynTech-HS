public class Shuffle
{
    public static void main(String[] args)
    {
        int[] values = {0,1,2,3};
        shuffle(values);
        show(values);

    }

    public static void shuffle(int[] values)
    {
        int[] temp = new int[values.length/2];
        for(int i = 0; i < temp.length; i++)
            temp[i] = values[i + values.length/2];
    }

    public static void show(int[] values)
    {
        for(int val: values)
            System.out.print(val + " ");
    }
}
