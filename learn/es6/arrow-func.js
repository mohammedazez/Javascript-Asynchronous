// functioon biasa
function greeting(params) {
  return "Hallo selamat datang"
}

// arrow function with default param
const sayHello = (name = "Alpha") => {
  return `Hallo selamat datang ${name}`
}
console.log(sayHello())

// arrow function short syntax
const penjumlahan = (a, b) => a + b
console.log(penjumlahan(3, 7))

const say = () => "Hallo selamat datang"
console.log(say())