<?php
#Write a function number_parity that takes an integer as parameter and return the following
#string: 1. Zero if the number ends in zero, 2. five if the number ends in a 5, 
# 3. even if the number is even (divisible by 2) AND does not end with a 0
# Odd if the number is odd (not divisible by 2) AND does not with a 5


// PHP code to check whether the number 
// is Even or Odd in Normal way
function check($number){
    if($number % 2==0 & $number % 5==0 ){
        echo "zero";
    }
    elseif($number % 2!= 0 & $number % 5==0){
        echo "five";
    }
    elseif($number % 2 == 0){
        echo "Even"; 
    }
    elseif($number % 2!= 0){
        echo "Odd";
    }
    
    
}
  
// Driver Code
$number = 458;
check($number)
?>



