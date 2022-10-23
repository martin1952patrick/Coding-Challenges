// java program to add even numbered indexes to the total and subtract
// odd numbered indexes from the total

class Main{
    public static void main(String args[]){
        //main mainly for having input values to be testes
        Integer[] arr = {2,6,8,3,5,4,7};
        find_total(arr);
    }
    
    //Integer [] find_total = new Integer[my_list];
    //find_total(arr);
public static Integer find_total(Integer[] my_list){

    

    //Initialize the variables and give the even and odd zero '0' value to mean the 
    // initial count/summation start from '0' 
    

        int evens = 0;

        int odds = 0;

        for(int num =0;num<my_list.length;num++){

            //we chech if the number index is  even or odd, so we set condition for checking
            //even and the other will automatically be odd if the first condition of being
            //even is not met, during checking the evens are added and odd are also added 

            if(num%2==0){
                evens+=my_list[num];
            }
            else{
                odds+=my_list[num];
            }
        }
     // After checking and doing the addition their total summation of odds is subtracted 
     // from total summation of evens to give the required answer
        System.out.println(evens-odds);

        return evens - odds;
    }
}

// different part but same question




public static Integer find_total( Integer[] my_list ) {
    //Insert your code here 


     //Initialize the variables and give the even and odd zero '0' value to mean the 
    // initial count/summation start from '0' 
    
      int evens = 0;

       int odds = 0;

       for(int num =0;num<my_list.length;num++){

           //we chech if the number index is  even or odd, so we set condition for checking
           //even and the other will automatically be odd if the first condition of being
           //even is not met, during checking the evens are added and odd are also added 

           if(num%2==0){
               evens+=my_list[num];
           }
           else{
               odds+=my_list[num];
           }
       }
       // we now return the differeces in the total of evens and odd
       System.out.println(evens-odds);

       return evens - odds;

    
}

     