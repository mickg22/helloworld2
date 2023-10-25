console.log ("going")
var x = 0;
let y = 1;
const t = 2
// t = t + 1 //demonstration of error

while (y < 1000000) {
   console.log ("while "+y)

 let  z = x + y
  x = y;
  y = z

}

// Expected output: 3
