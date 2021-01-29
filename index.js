/**
* counts how many factors a number that the user inputted has and prints them out
* Precondition: num >= 0
* Postcondition: numOfFactors - int, factors - array
* Parameter: none
*/
function countFactorsUser () {
  var num = prompt("Enter the number you want to factor: ");
  var numOfFactors = 0; 
  var factors = [];
  for (var i = 1; i <= num; i++){ //for every number in between 1 and n
          if (num % i == 0){ // if n is perfectly divisible by i then i is a factor
            numOfFactors++; //adding on to factor count
            factors.push(i);
          }
        }
        console.log(num + " has " + numOfFactors+ " factors which are:  " + factors );
        return factors;
}

/**
* counts how many factors a number has
* Precondition: n >= 0
* Postcondition: numOfFactors - int, factors - array
* Parameter: n
*/
function countFactors (n) {
  var numOfFactors = 0; 
  var factors = [];
  for (var i = 1; i <= n; i++){ //for every number in between 1 and n
          if (n % i == 0){ // if n is perfectly divisible by i then i is a factor
            numOfFactors++; //adding on to factor count
            factors.push(i);
          }
        }
        return factors;
}

/**
* checks if a number the user has inputted is prime
* Precondition: num >= 0
* Postcondition: factors - array
* Parameter: none
*/
function isPrimeUser () {
  var num = prompt("Enter the number you want to see is prime: ");
  var factors = countFactors(num); 
  console.log("It's factors are: " + factors);
  if (factors.length > 2){
    console.log("It is not prime");
  } else {
    console.log("It is prime");
  }
}

/**
* checks if a number is prime
* Precondition: n >= 0
* Postcondition: factors - int, prime - boolean
* Parameter: n
*/
function isPrime (n) {
  var factors = countFactors(n);
  var prime = false;  
  if (factors > 2){
    prime = false;
  } else {
    prime = true;
  }
  return prime; 
}

/**
* counts the number of primes there are between 2 and n
* Precondition: endNum >= 2
* Postcondition: factors - array, numPrime - int
* Parameter: none
*/
function countPrimes(){
  var endNum = prompt("Enter a number: ");
        var numPrimes = 0;
        var factors = [];
        for (var i = 2; i <= endNum; i++){ // for every number in between 2 and n
          if (isPrime(i)){ // if the number is prime
            numPrimes++; //add on to the numPrime count
            factors.push(i);
          }
        }
        console.log("This number has " + numPrimes+ " prime numbers between it and 2 which are: " + factors);
    }

/**
* runs the user through the program choices until they decide to leave
*/
var startUsing = prompt("Would you like to continue (Y/N)?");
while (startUsing == "Y"){
  var choice = prompt("What would you like to do? \n 1. Find all of the factors to a number \n 2. Find out if a number is prime or not \n 3. Find all of the prime numbers between 2 and n");
  if (choice == 1){
    countFactorsUser();
  } else if (choice == 2){
    isPrimeUser();
  } else if (choice == 3){
    countPrimes();
  } else {
    console.log("Please select a valid choice");
  }
  var continueUsing = prompt("Would you like to continue (Y/N)?");
  startUsing = continueUsing;
}

console.log("Ok, goodbye!");