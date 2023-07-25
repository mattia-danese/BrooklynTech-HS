public class testing
{
    public static void main(String[] args)
    {
      Coords eq = new Coords(4,3);
      Coords eq2 = new Coords(1,2);
      Coords eq3 = new Coords(4,4);
      Coords[] list = {eq3,eq,eq2};
      Coords eq4 = new Coords();
      eq4.sortByDistanceToThis(list);
      System.out.print(Sort.toString(list));
    }
}
