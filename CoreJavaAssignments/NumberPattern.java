class NumPrint{
	void prin()
	{
		for(int i=35;i<=46;i++)
		{
			if(i==38){
				System.out.println("Thirty Eight");
				continue;
			}
			else if(i==40){
				continue;
			}
			else if(i==43){
				continue;
			}
			else if(i==45){
				System.out.println("Forty Five");
			}
			else{
				System.out.println(i);
			}
		}
	}
}
class NumberPattern{
	public static void main(String[] args) {
		NumPrint obj=new NumPrint();
		obj.prin();
		// Scanner scan=new Scanner(System.in);

	}
}