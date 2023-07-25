public class Test
{
    public static void main(String[] args)
    {
        NumberCube andrewCube = new NumberCube();
        int theRoll = andrewCube.roll();
        System.out.println(theRoll);

        NumberCube haoCube = new NumberCube(20);
        theRoll = haoCube.roll();
        System.out.println(theRoll);
    }
}
