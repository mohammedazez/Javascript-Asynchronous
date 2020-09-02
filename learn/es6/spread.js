// Array
let angka1 = [1,2,3]
let angka2 = [4,5,6]

// spread array
let kumpulanAngka = [...angka1, ...angka2]

// tidak pakai spread
let tes = [angka1, angka2]

console.log(kumpulanAngka)
console.log(tes)

// Object
let digi = {
  name : "Koromon",
  img : "https://digimon.shadowsmith.com/img/koromon.jpg",
  level : "In Training"
}

// spread object
let digimon = {
  ...digi,
  tamer: "Thaici",
  food: "meet"
}

console.log(digimon)

// rest object
let {name, tamer, ...rest} = digimon
console.log(rest)

// rest array
let [a, b, ...c] = [1,2,3,4,5,6,7,8,9]
console.log("a", a)
console.log("b", b)
console.log("c", c)

// rest param
tesArray(1,2,3,4,5)
function tesArray(...arr) {
  console.log("arr", arr)
}