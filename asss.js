// Write a for loop that counts backwards from 10 to 1 and then logs blast off at the end.
// Write a for loop that calculates the sum of all numbers between 1 and 20(including 20)
// Write a for loop that iterates from number 1 to 15
// i.) for multiples of 3, log fizz instead of the number
// ii.)for multiples of 5, log buzz instead of the number
// iii.) for numbers which are multiples of both 3 and 5 log fizzbuzz

for (i=10; i>=1; i--){
    console.log(i)
}

console.log("Blast off!")

let sum = 0;
for (i=1; i<=20; i++){
  sum += i;
}
console.log(sum)

for (i=1; i<=15; i++){
    console.log(i)
}

for (i=1; i<=20; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }
    else if(i % 3 === 0){
        console.log("fizz")
    }
    else if(i % 5 === 0){
        console.log("buzz")
    }
    else {
        console.log(i)
    }

}