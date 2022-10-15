<script>
 
// Javascript program to find the
// ratio of positive, negative, and
// zero elements in the array.
 
// Function to find the ratio of
// positive, negative, and zero elements
function positiveNegativeZero(arr)
{
     
    // Store the array length into
    // the variable len.
    let len = arr.length;
 
    // Initialize the postiveCount,
    // negativeCount, and zeroCountby
    // 0 which will count the total number
    // of positive, negative and zero elements
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
 
    // Traverse the array and count the
    // total number of positive, negative,
    // and zero elements.
    for(let i = 0; i < len; i++)
    {
        if (arr[i] > 0)
        {
            positiveCount++;
        }
        else if (arr[i] < 0)
        {
            negativeCount++;
        }
        else if (arr[i] == 0)
        {
            zeroCount++;
        }
    }
 
    // Print the ratio of positive,
    // negative, and zero elements
    // in the array up to four decimal places.
    document.write((positiveCount / len).toFixed(4) + " ");
    document.write((negativeCount / len).toFixed(4) + " ");
    document.write((zeroCount / len).toFixed(4));
    document.write("<br>");
}
 
// Driver Code.
 
// Test Case 1:
let a1 = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(a1);
 
// Test Case 2:
let a2 = [ 4, 0, -2, -9, -7, 1 ];
positiveNegativeZero(a2);
 
// This code is contributed by sravan kumar G
 
</script>