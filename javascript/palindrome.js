function palindrome(str) {
// some test are failing

    // removing non-alphanumeric characters
    const regexPattern = /[^A-Za-z0-9]/g;
    //let ans = str.replace(regexPattern, "")
    //return str
    //console.log(ans)
    str = str.replace(regexPattern, "")

  //first we check length of the string 
    const len = str.length;
    
    // lop through a half of the string 
    for (let i = 0; i<len/2; i++){
      //Check if the first and the last part of the       string are the same
    
      if (str[i] == str[len-1-i]){
        return true;
      }
    
    }
    
      return false;
  //return true;
}

palindrome("eye");



    // function palindrome(str) {

    //     // convert string to an array
    //       const arrayValues = str.split('');
      
    //       // reverse the array values
    //       const reverseArrayValues = arrayValues.reverse();
      
    //       // convert array to string
    //       const reverseStr = reverseArrayValues.join('');
      
    //   if(str == reverseStr) {
    //           return true;
    //       }
    //       else {
    //           return false;
    //       }
      
    //     //return true;
        
    //   }
      
    //   palindrome("eye");