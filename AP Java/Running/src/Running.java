public class Running
{
    private int[] result = new int[2];

    public void tester()
    {
        NumberCube NumCube = new NumberCube();
        getLongestRun(getCubeTosses(NumCube, 10));

        if (result[0] == -1)
            System.out.println("There is no run");
        else
        {
            if (result[1] == 1)
                System.out.print("Longest run starts at index " + result[0] + " and is 2 indeces long")
                        ;
            else
                System.out.print("Longest run starts at index " + result[0] + " and is " + result[1] + " indices long");
        }
    }

    public int[] getCubeTosses(NumberCube cube, int numTosses)
    {

        int[] values = new int[numTosses];
        for(int i = 0; i < numTosses; i++)
        {
            values[i] = cube.toss();
        }

        return values;
    }

    public void getLongestRun(int[] values)
    {
        show(values);

        int currentRun = 0;
        int longestRun = 0;
        int longestIdx = 0;
        boolean run = false;

        for(int i = 1; i < values.length; i++)
        {
            if(values[i] == values[i - 1])
            {
                currentRun++;
                run = true;

                if(currentRun > longestRun)
                {
                    longestRun = currentRun;
                    longestIdx = i - currentRun;
                }
            }
            else
                currentRun = 0;
        }
        if(run)
        {
            result[0] = longestIdx;
            result[1] = longestRun + 1;
        }
        else
            result[0] = -1;
    }

    public void show(int[] values)
    {
        System.out.print("Numbers: ");
        for(int i = 0; i < values.length; i++)
        {
            System.out.print(values[i] + " ");
        }
        System.out.println();
        System.out.print("Indices: ");
        for(int i = 0; i < values.length; i++)
        {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
