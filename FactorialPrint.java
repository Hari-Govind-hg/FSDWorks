class FactorialPrint{
	public static void main(String[] args) {
		// System.out.println("you passed "+args[0]); //this will create a ArrayIndexOutOfBoundsException error
		int a=Integer.parseInt(args[0]);
		int result=1;
		for(;a>1;a--)
		{
			result=result*a;
		}
		System.out.println("Added value : " + result);
	}
}