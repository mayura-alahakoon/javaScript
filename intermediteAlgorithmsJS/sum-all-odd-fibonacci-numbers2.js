 function sumFibs(num) {
  let fibbonacciSequence = [0, 1];
  let sumOfOddFibbonacciNumber = 1;
  let counter = iterateUpFibbonacciSequence(counter);
 
 function iterateUpFibbonacciSequence(counter) {
   return fibbonacciSequence[fibbonacciSequence.length -2] + fibbonacciSequence[fibbonacciSequence.length -1]
 }

 while (counter <= num) {
   fibbonacciSequence.push(counter);
   counter = iterateUpFibbonacciSequence(counter);
 }
 let sumOfOddFibbonaciNumbers = 0;

 fibbonacciSequence.forEach(function(num) {
   if (num % 2 !=0) {
     sumOfOddFibbonaciNumbers += num;
   }
 });
  return sumOfOddFibbonaciNumbers;
}

console.log(sumFibs(10));
