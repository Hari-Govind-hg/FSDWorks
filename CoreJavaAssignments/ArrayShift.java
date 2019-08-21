import java.util.Scanner;
class Shifter{
	Scanner s=new Scanner(System.in);
	void arrshift()
	{
		int a=0,temp=0;
		System.out.println("Enter length of array");
		a=s.nextInt();
		System.out.println("Enter the elements of the array");
		int []arr=new int[a];


		for (int i=0;i<a ;i++ ) {
			arr[i]=s.nextInt();			
		}


		temp=arr[a-1];
		for (int i=a-1;i>0 ;i-- ) {
			arr[i]=arr[i-1];
		}
		arr[0]=temp;

		System.out.println("\n******************\n");


		
		for (int i=0;i<a ;i++ ) {
			System.out.println(arr[i]);
		}

	}
}


class ArrayShift{
	public static void main(String[] args) {
		// Scanner sc=new Scanner(System.in);
		Shifter obj=new Shifter();
		obj.arrshift();
	}
}