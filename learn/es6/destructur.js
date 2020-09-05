// Object
let person = {
  name : "Echo",
  age : 30,
  address : "Jl sana sini"
}

// Cara biasa
// let name = person.name
// let age = person.age
// let address = person.address

// Cara destructur
let {name, age, address} = person

console.log(name)
console.log(age)
console.log(address)

// array
let buah = ["pisang", "semangka", {namaBuah: "duku", rasaBuah:"manis"}]

// Cara biasa
// let buah1 = buah[0]
// let buah2 = buah[1]
// let buah3 = buah[2]

// Cara destructur
let [buah1, buah2, buah3] = buah

console.log(buah1)
console.log(buah2)
console.log(buah3)

let {namaBuah, rasaBuah} = buah3
console.log(namaBuah)
console.log(rasaBuah)


