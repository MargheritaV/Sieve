//Prepare the project of a website, which will present prime numbers to 1 million with the help of Sieve of Eratosthenes algorithm. 
//Code should be based on JavaScript only, with no use of libraries or frameworks.

function sieve(n){
var array=[]; //empty array 
for(var i=2; i<=n; i++){ 
array[i]=true; //every value is true, each number is prime
}

//nested forloop to mark multiples of each index as false 
for (var i = 2; i < math.sqrt; i++) { //instead of looping through all of numbers in our array and marking their multiples as false 
we can stop looping through at the square root of 'num'because all prime numbers after the square root of num will be marked as false
so ther is no point in continuing our loop 
for (var j = 2; ji <= n; j++) { 
array[ij] = false;
} 
}
}

for (var i = 2; i < array.length; i++) {
    if(array[i]) {
        output.push(i);
    }
}

return output;
}
