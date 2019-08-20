class AddThree{
	public static void main(String[] args) {
		int a=Integer.parseInt(args[0]);
		int b=Integer.parseInt(args[1]);
		int c=Integer.parseInt(args[2]);
		int flag=0;
		int result=a+b+c;
		if(a<40)
		{
			flag=1;
		}

		if(b<40)
		{
			flag=1;
		}
		if(c<40)
		{
			flag=1;
		}
		if(result<125)
		{
			flag=1;
		}
		if(flag==0)
		{
			System.out.println("PASSING");
		}
		if(flag==1)
		{
			System.out.println("FAILING");
		}


		// if(a>40 && b>40 && c>40 && a+b+c>=125)
		// {
		// 	int result=a+b+c;
		// 	System.out.println("PASSING"); 
		// }
		// if(!(a>40 && b>40 && c>40 && a+b+c>=125))
		// {
		// 	System.out.println("FAILING");
		// }

	}
}