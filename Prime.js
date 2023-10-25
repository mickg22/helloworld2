let z = 1
console.log(isprime(z))
while (z < 140) {
    if (isprime(z)) {
        console.log ("z: "+z + " isprime: " + isprime(z))
    }
   
 z = z + 1
 
 }




function isprime(n){
    var candidate = 2 

    while (candidate <n){
        if ( n % candidate == 0) {
            return false
          } else {
            candidate = candidate + 1
          }   
     
     }
return true

}