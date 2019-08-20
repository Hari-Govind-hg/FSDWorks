class MultiplicationTable{
	public static void main(String[] args) {
		int a=Integer.parseInt(args[0]);
		int prod=0;
		for(int i=1;i<=a;i++)
		{
			prod=i*a;
			System.out.println(a+"*"+i+"="+prod);
		}
	}
}