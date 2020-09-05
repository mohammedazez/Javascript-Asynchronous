let janjian = Promise((resolve, reject) => {
  if (true) {
    resolve("Janji selesai");
  } else {
    reject("Janji PHP");
  }
});

janjian
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(janjian);

// cara deklarasi Promise
// 1. buat sebuah variable lalu berikan new Promise
// 2. buat sebuah function didalam promise dengan 2 parameter
// 3. berikan kondisi didalam promise

// cara pemanggilan Promise
// 1. panggil variable promisenya
// 2. buat .then lalu buat sebuah function yang diinginkan
// 3. tambahkan .catch untuk menampilkan error

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // 1
    return response.json();
  })

  .then((result) => {
    // 2
    console.log(result);
  });
