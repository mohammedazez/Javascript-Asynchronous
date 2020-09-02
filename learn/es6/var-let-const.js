{
  var name = "Alpha"
  let age = 20
  const NIK = "3123456"

  age = 21
  name = "Beta"
  // const error di assign ulang
  // NIK = "123

  var name = "Delta"
  // let dan const error dideklarasi ulang
  // let age = 25
  // const NIK = "1234"

  console.log(age)
}

// var dpt dipanggil di luar block scope
console.log(name) 

// let tidak dpt dipanggil di luar block scope
// console.log(age) 

// const tidak dpt dipanggil di luar block scope
// console.log(NIK) 

