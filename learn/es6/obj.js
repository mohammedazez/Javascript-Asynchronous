let name = "Koromon"
let img = "https://digimon.shadowsmith.com/img/koromon.jpg"
let level = "In Training"

let a = "majikan"

let digimon = {
  name,
  img,
  level,
  // dynamic property
  [a]: "Taichi"
}

console.log(digimon)
