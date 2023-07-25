public class LinearEquation
{
    //ax + by + c = 0

    //INSTANCE VARIABLE
    private double a;
    private double b;
    private double c;

    //STATIC METHODS
    public static boolean areValidParams(double a, double b)
    {
        if(a == 0 && b == 0)
            return false;
        return true;
    }

    //CONSTRUCTORS
    public LinearEquation(double a, double b, double c) //works
    {
        if(areValidParams(a,b))
        {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    public LinearEquation(double slope, Coords point) //works
    {
        a= -slope;
        b = 1;
        c = (slope * point.getX() * -1) + point.getY();
    }

    public LinearEquation(LinearEquation other) //works
    {
        a = other.a;
        b = other.b;
        c = other.c;
    }

    public LinearEquation(Coords point1, Coords point2) //works
    {
        this((point2.getY() - point1.getY())/(point2.getX() - point1.getX()),point1);
       /*
        a = (point1.getY() + point2.getY())/(point1.getX() + point2.getX());
        b = 1;
        c = -(a * point1.getX()) + point1.getY();
        */
    }

    public LinearEquation(LinearEquation other,Coords point)
    {
        this(other.a/other.b, point);
    }

    //ACCESSORS
    public double getA()
    {
        return a;
    }

    public double getB()
    {
        return b;
    }

    public double getC()
    {
        return c;
    }

    public boolean slopeDefined()
    {
        if(-a/b >= 0 || -a/b <= 0)
            return true;
        return false;
    }


    public boolean hasYIntercept()
    {
        if(b == 0)
            return false;
        return true;
    }

    public boolean hasXIntercept()
    {
        if(a == 0)
            return false;
        return true;

    }

    public double slope()
    {
        return -a/b;
    }

    public double yIntercept()
    {
        if(hasYIntercept())
            return -c/b;
        return Double.NaN;
    }

    public double xIntercept()
    {
        if(hasXIntercept())
            return -c/a;
        return Double.NaN;
    }

    public double slopeOfPerpendicularLine()
    {
        return b/a;
    }

    public boolean isIncreasing()
    {
        if(-a/b > 0)
            return true;
        return false;
    }

    public boolean isDecreasing()
    {
        if(-a/b < 0)
            return true;
        return false;
    }

    public boolean isHorizontal()
    {
        if(-a/b == 0)
            return true;
        return false;
    }

    public boolean isVerticle()
    {
        if(b == 0)
            return true;
        return false;
    }

    public boolean isAFunction()
    {
        return !isVerticle();
    }

    public boolean isAValidLinearEquation()
    {
        return areValidParams(a, b);
    }

    public boolean isDirectVariation()
    {
        if (yIntercept() == 0)
            return true;
        return false;
    }

    //OTHER METHODS

    public boolean equals(LinearEquation other)
    {
        if( a/other.a == b/other.b && b/other.b == c/other.c)
            return true;
        return false;
    }

    public LinearEquation parallelLine(Coords point)
    {
        return new LinearEquation(-slope(), point);
    }

    public LinearEquation perpendicularLine(Coords point)
    {
        if(!isAValidLinearEquation())
            return null;
        else if(isHorizontal())
            return new LinearEquation(1, 0, -1 * point.getX());
        else if (isVerticle())
            return new LinearEquation(0,1, -1 * point.getY());
        else
            return new LinearEquation(slopeOfPerpendicularLine(), point);
    }

    public double shortestDistanceFrom(Coords point)
    {
        LinearEquation perp = perpendicularLine(point);
        Coords intersection = pointOfIntersection(perp);
        return point.distanceFrom(intersection);
    }

    public LinearEquation inverseFunction()
    {
        LinearEquation other = new LinearEquation(b/-a, -1, -c/a);
        return other;
    }

    public Coords pointOfIntersection(LinearEquation other)
    {
        double y = ((other.c * a) - (c * other.a))/((b * other.a) - (other.b * a));
        double x = ((-b * y) - c) / a;

        Coords intersection = new Coords(x,y);
        return intersection;
    }

    public boolean isParallel(LinearEquation other)
    {
        if(other.slope() == slope() && !equals(other))
            return true;
        return false;
    }

    public boolean isPerpendicular(LinearEquation other)
    {
        if(other.slope() == slopeOfPerpendicularLine())
            return true;
        return false;
    }

    public String toString() {return a + "x + " + b + "y + " + c + " = 0" ;}

    public String getSlopeInterceptForm(){ return "y = " + (-a/b) + "x + " + (-c/b);}
}
