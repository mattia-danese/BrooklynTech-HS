public class ComplexNumber
{
    //a + bi

    //INSTANCE VARIABLES

    private double a;
    private double b;

    //CONSTUCTORS

    public ComplexNumber(double realPart, double imaginaryPart)
    {
        a = realPart;
        b = imaginaryPart;
    }

    public ComplexNumber(ComplexNumber other)
    {
        a = other.a;
        b = other.b;
    }

    //ACCESSORS

    public double getRealMagnitude(){return a;}

    public double getImaginaryMagnitude(){return b; }

    public String toString(){return a + " + " + b + "i";}

    //MUTATORS

    public void add (double scalar)
    {
        a+= scalar;
        b+= scalar;
    }

    public void add (ComplexNumber other)
    {
        a+=other.a;
        b+=other.b;
    }

    public void subtract (double scalar)
    {
        a-= scalar;
        b-= scalar;
    }

    public void subtract (ComplexNumber other)
    {
        a-=other.a;
        b-=other.b;
    }
    public void multiply (double scalar)
    {
        a*= scalar;
        b*= scalar;
    }

    public void multiply (ComplexNumber other)
    {
        double tempA = a;

        a = (a * other.a) - (b * other.b);
        b = (tempA * other.b) + (b * other.a);
    }

    public boolean divideBy(double scalar)
    {
        if(scalar != 0)
        {
            a/=scalar;
            b/=scalar;
            return true;
        }
        return false;
    }

    public boolean divideBy(ComplexNumber other)
    {
        double holder = other.a * other.a + other.b * other.b;
        if(holder != 0)
        {
            double tempA = a;

            a = ((a * other.a) / holder) + ((b * other.b) / holder);
            b = (-(tempA * other.b) / holder) + ((b * other.a) / holder);
            return true;
        }
        return false;
    }
}
