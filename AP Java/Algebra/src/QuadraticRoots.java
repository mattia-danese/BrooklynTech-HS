public class QuadraticRoots
{
    //INSTANCE VARIABLES

    private ComplexNumber root1;
    private ComplexNumber root2;

    //CONSTRUCTORS

    QuadraticRoots(double r1, double r2)
    {
        root1 = new ComplexNumber(r1, 0);
        root2 = new ComplexNumber(r2, 0);
    }

    QuadraticRoots(ComplexNumber r1)
    {
        root1 = new ComplexNumber(r1.getRealMagnitude(), r1.getImaginaryMagnitude());
        root2 = new ComplexNumber(r1.getRealMagnitude(), -r1.getImaginaryMagnitude());
    }

    //ACCESSORS

    public ComplexNumber getRoot1(){return root1;}

    public ComplexNumber getRoot2(){return root2;}

    public String toString(){return root1.toString() + " , " + root2.toString();}

    public boolean areValid()
    {
        if((root1.getImaginaryMagnitude() == 0 && root2.getImaginaryMagnitude() == 0) || (root1.getRealMagnitude() == root2.getRealMagnitude() && root1.getImaginaryMagnitude() == -root2.getImaginaryMagnitude()))
            return true;
        return false;
    }
}
