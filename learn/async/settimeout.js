console.log("Hallo 1");
setTimeout(function () {
  console.log("Timeout 1");
}, 5000);
console.log("Hallo 2");
console.log("Hallo 3");
setTimeout(function () {
  console.log("Timeout 2");
}, 3000);

const p1 = () => {
  console.log("Hallo 1");
}

const p2 = () => {
  setTimeout(function () {
  console.log("Hallo 2");
}, 2000);
}

const p3 = () => {
  console.log("Hallo 3");
}

p1()
p2()
p3()