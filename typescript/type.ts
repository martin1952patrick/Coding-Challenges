//typescript program to find minimum difference in an inputArray
// of maximum A and minimum B in two subsequences.

 // Return minimum difference of
 // maximum A and minimum B of 
 // elements in two two sequences

 
   //const inputArray = [1, 3, 10, 4, 19, 5, 7, 9, 15];
//export default function minDif(num:number,
const inputArray = [1, 5, 7, 9, 15]

let minDif;

let A;

let B;

// Loop and find minimum value
for (i = 0; i < inputArray.length - 1; i++) {
    //find |max(A) - min(B)|
  let dif = Math.abs(
    Math.max(...inputArray.slice(0, i + 1)) - Math.min(...inputArray.slice(i + 1))
  );
  console.log(`dif: ${dif}`)
  // Check if minDif already has a value or not
  //dif < minDif, assign minDif, A and B appropriately
  if (minDif) {
    if (dif < minDif) {
      minDif = dif;
      A = inputArray.slice(0, i + 1);
      B = inputArray.slice(i + 1);
    }
  } else { //if minDiff is still
    minDif = dif;
    A = inputArray.slice(0, i + 1);
    B = inputArray.slice(i + 1);
  }
  console.log(`minDif: ${minDif}`)
  debugger;
}

//Console log final output to confirm the output
console.log(`A: ${A}`)
console.log(`B: ${B}`)
console.log(`Final minDif: ${minDif}`)