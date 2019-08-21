class Star{
	void prin()
	{
		for(int i=1;i<=5;i++)
		{	System.out.println("\n");
			for (int j=0;j<i ;j++ ) {	
				System.out.print("* ");
			}
		}
	}
}
class StarPrint{
	public static void main(String[] args) {
		Star obj=new Star();
		obj.prin();
		System.out.println("\n");
		// Scanner scan=new Scanner(System.in);

	}
}