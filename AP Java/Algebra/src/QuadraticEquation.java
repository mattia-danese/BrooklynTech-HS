public class QuadraticEquation
{
    // y = ax^2 + bx + c

    //INSTANCE VARIABLES

    private double a;
    private double b;
    private double c;

    //CONSTRUCTORS

    QuadraticEquation(double a, double b, double c)
    {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    QuadraticEquation(QuadraticEquation other)
    {
        a = other.a;
        b = other.b;
        c = other.c;
    }

    QuadraticEquation()
    {
        a = 1;
        b = 0;
        c = 0;
    }

    QuadraticEquation(double coefficient, Coords vertex)
    {
        a = coefficient;
        b = -2 * coefficient * vertex.getX();
        c = (coefficient * vertex.getX() * vertex.getX()) + vertex.getY();
    }

    //ACCESSORS

    public String toString(){return "y = " + a + "x^2 + " + b + "x + " + c;}

    public double getDescriminant()
    {
        return (b * b) - (4 * a * c);
    }

    public boolean hasRealRoots()
    {
        if(getDescriminant() < 0)
            return false;
        return true;
    }

    public boolean hasEqualRoots()
    {
        if (getDescriminant() == 0)
            return true;
        return false;
    }

    public boolean hasMinimum()
    {
        if(a > 0)
            return true;
        return false;
    }

    public boolean hasMaximum()
    {
        if(hasMinimum())
            return false;
        return true;
    }

    public LinearEquation axisOfSymmetry()
    {
        LinearEquation axis = new LinearEquation(1, 0, b / (2 * a));
        return axis;
    }

    public Coords vertex()
    {
        double x = b/(-2 * a);
        double y = c - (a * x * x);

        Coords vertex = new Coords(x,y);
        return vertex;
    }

    public LinearEquation derivative()
    {
        LinearEquation derivative = new LinearEquation(2 * a, -1, b);
        return derivative;
    }

    public QuadraticRoots getRoots()
    {
        double dis = getDescriminant();
        double plus = 0;
        double minus = 0;
        if(dis > 0)
        {
            plus = (-b + Math.sqrt(dis)) / (2 * a);
            minus = (-b - Math.sqrt(dis)) / (2 * a);
            QuadraticRoots roots = new QuadraticRoots(plus, minus);
            return roots;
        }
        ComplexNumber num = new ComplexNumber(-b / (2 * a),Math.sqrt(-getDescriminant()));
        QuadraticRoots roots = new QuadraticRoots(num);
        return roots;
    }
}
