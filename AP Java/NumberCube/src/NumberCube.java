public class NumberCube
{
    /*
        INSTANCE VARIABLE
        - Declared in a class, but outside of a method (if inside method, its scope would only be that method)
    */
    private int numOfSides;
    /*
        CONSTANTS
        - "final" makes it so from that point in time, the variable can no longer change value
     */
    public static final int DEFAULT_SIDES = 6;
    public static final int MAX_SIDES = 20;
    public static final int MIN_SIDES = 4;

    public NumberCube()
    {
        numOfSides = DEFAULT_SIDES;
    }


    public NumberCube(int sides)
    {
       if (sides < MIN_SIDES || sides > MAX_SIDES)
           numOfSides = DEFAULT_SIDES;
       else
           numOfSides = sides;
    }

    public int roll()
    {
        return (int)(Math.random() * numOfSides) + 1;
    }
}
