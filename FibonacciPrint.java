class FibonacciPrint{
	public static void main(String[] args) {
		int n1=1;
		int n2=1;
		int result=1;
		System.out.println(n1);
		System.out.println(n2);
		while(result!=89)
		{
			result=n1+n2;
			n1=n2;
			n2=result;
			System.out.println(result);
		}
	}
}