import java.util.Scanner;
class Sel{
	Scanner s=new Scanner(System.in);
	void sorter()
	{
		int a=0;
		int temp=0;
		System.out.println("Enter length of array");
		a=s.nextInt();
		System.out.println("Enter the elements of the array");
		int []arr=new int[a];


		for (int i=0;i<a ;i++ ){
			arr[i]=s.nextInt();			
		}

		for(int i=0;i<a-1;i++)
		{
			for(int j=0;j<a-i-1;j++){
			if(arr[j]>arr[j+1])
			{
				temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}

		}

        // for (int i = 0; i < a-1; i++)
        // {
        //     int min = i;
        //     for (int j = i+1; j < a; j++){
        //         if (arr[j] < arr[min])
        //             min = j;
        //     }

        //     int temp = arr[min];
        //     arr[min] = arr[i];
        //     arr[i] = temp;
        // }

        System.out.println("\n************\n");

        for (int i=0;i<a ;i++ ) {
			System.out.println(arr[i]);
		}
	}
}

class Bubble{
	public static void main(String[] args) {
		Sel obj=new Sel();
		obj.sorter();
	}
}