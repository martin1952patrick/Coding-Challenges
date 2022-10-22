// javascript program to find minimum difference
// of maximum and minimum of K number.
 
    // Return minimum difference of
    // maximum and minimum of k
    // elements of arr[0..n-1].
    function minDiff(arr , n , k) {
        var result = Number.MAX_VALUE;
 
        // Sorting the array.
        arr.sort((a,b)=>a-b);
 
        // Find minimum value among
        // all K size subarray.
        for (i = 0; i <= n - k; i++)
            result = Math.min(result, arr[i + k - 1] - arr[i]);
 
        return result;
    }
 
    // Driver code
     
        var arr = [ 10, 100, 300, 200, 1000, 20, 30 ];
        var n = arr.length;
        var k = 3;
 
        return(minDiff(arr, n, k));
 
// This code contributed by gauravrajput1