import java.util.ArrayList;

public class Coords
{
    public static Coords closestPointToOrigin(ArrayList<Coords> points)
    {
        Coords closest = points.get(0);
        double min = points.get(0).distanceFromOrigin();

        for(Coords point:points)
        {
            if(point.distanceFromOrigin() < min)
            {
                min = point.distanceFromOrigin();
                closest = point;
            }
        }
        return closest;
    }

    public Coords closestPoint(ArrayList<Coords> points)
    {
        Coords closest = points.get(0);
        double min = this.distanceFrom(points.get(0));
        for(Coords point:points)
        {
            if(this.distanceFrom(point) < min)
            {
                min = this.distanceFrom(point);
                closest = point;
            }
        }
        return closest;
    }

    //INSTANCE VARIABLES

    private double x;
    private double y;

    //CONSTRUCTORS

    public Coords(double x, double y)
    {
        this.x = x;
        this.y = y;
    }

    public Coords(double x)
    {
        this.x = x;
        this.y = x;
    }

    public Coords()
    {
        x = 0;
        y = 0;
    }

    public Coords(Coords other)
    {
        x = other.getX();
        y = other.getY();
    }

    //ACCESSORS

    public double getX()
    {
        return x;
    }

    public double getY()
    {
        return y;
    }

    public String toString()
    {
        String coordinates = "(" + x + ", " + y +")";
        return coordinates;
    }

    //MUTATORS

    public void setX(double x)
    {
        this.x = x;
    }

    public void setY(double y)
    {
        this.y = y;
    }

    public void reflectOnXAxis()
    {
        x = -x;
    }

    public void reflectOnYAxis()
    {
        x = -x;
    }

    public void reflectOnOrigin()
    {
        x = -x;
        x = -x;
    }

    public void translate(double horizontal, double vertical)
    {
        x += horizontal;
        y += vertical;
    }

    public void dilate(double dilationFactor)
    {
        x *= dilationFactor;
        y *= dilationFactor;
    }

    //OTHER METHODS

    public double distanceFromOrigin()
    {
        double distance = Math.sqrt((x*x) + (y*y));
        return distance;
    }

    public double distanceFrom(Coords other)
    {
        double distance = Math.sqrt(Math.pow(x - other.getX(),2)+ Math.pow(y - other.getY(),2));
        return distance;
    }

    public boolean equals(Coords otherPoint)
    {
        if ( x == otherPoint.getX() && y == otherPoint.getY())
            return true;
        else
            return false;
    }

    public double getSlopeOfLineSegment(Coords other)
    {
        double slope = (y - other.getY())/(x - other.getX());
        return slope;
    }

    public boolean slopeOfLineSegmentDefined(Coords other)
    {
        if (x - other.getX() == 0)
            return false;
        else
            return true;
    }

    //COMPARING

    public int compareByDistanceToOrigin(Coords other) //works
    {
        if(this.distanceFromOrigin() < other.distanceFromOrigin())
            return -1;
        else if(this.distanceFromOrigin() == other.distanceFromOrigin())
            return 0;
        else return 1;
    }

    public int compareByDistanceToThis(Coords p1, Coords p2) //works
    {
        if(p1.distanceFrom(this) < p2.distanceFrom(this))
            return 1;
        else if(p1.distanceFrom(this) > p2.distanceFrom(this))
            return 2;
        else return 0;
    }

    public void sortByDistanceToThis(Coords[] points) //works
    {
        for(int i = 0; i < points.length - 1; i++)
        {
            int lowest = i;
            for(int a = i + 1; a < points.length; a++)
                if(points[a].distanceFrom(this) < points[lowest].distanceFrom(this))
                    lowest = a;
            Sort.swap(i, lowest, points);
        }
    }
}
