fetch("https://restcountries.eu/rest/v2/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    listCountry(data);
  })
  .catch((error) => {
    console.log("Maaf tidak bisa ditampilkan karena error : " + error);
  });

// Pemanggilan menggunakan DOM
let country = document.querySelector(".country");

function listCountry(data) {
  for (let i = 150; i < 200; i++) {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${data[i].flag}" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title"><a>${data[i].name}</a></h4>
        <p class="card-text">Ibu Kota : ${data[i].capital}</p>
        <p class="card-text">Benua: ${data[i].region}</p>
        <a href="#" class="btn btn-primary">Visit this country</a>
      </div>
    </div>`;
    country.appendChild(card);
  }
}

listCountry();
