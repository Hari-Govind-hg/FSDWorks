class DecToBin{
	public static void main(String[] args) {
		int a=Integer.parseInt(args[0]);
		String b="";
		do{
			int temp=a%2;
			b=temp+b;
			a=a/2;
		}while(a>0);
		System.out.print(b);
	}
}