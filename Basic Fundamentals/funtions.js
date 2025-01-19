function sum(a, b) {
  return a + b
}
console.log(sum(4, 5))
let a = 0
function sum2() {
  for (let i = 0; i < 100; i++) {
    a = a + i
  }
  console.log(a)
}
sum2()

function calculate(a, b, callToFun) {
  //Callback function  
  const value = callToFun(a, b)
  console.log(value)
}
function add(a, b) {
  return a + b
}
calculate(4, 5, add)

function greet() {
  console.log("Hello good morning rohit")
}
setTimeout(greet, 1000 * 5)

setInterval(greet, 1 * 1000)