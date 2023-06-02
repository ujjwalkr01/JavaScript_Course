"use strictt";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data, className = "") {
  //for currencies....
  const currencydata = data.currencies;
  const currency = Object.keys(currencydata);
  const currencyName = currencydata[currency[0]]["name"];

  //for languages...
  const languages = data.languages;
  const lang = Object.keys(languages);
  const langName = languages[lang[0]];

  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${langName}</p>
      <p class="country__row"><span>💰</span>${currencyName}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
}

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
};
// const request= fetch(`https://restcountries.com/v3.1/name/${'India'}`); //fetch returns the promise and is used to request data from the server
//console.log(request); //it will print the promise intial state that is pending

// const getCountryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then((response) => {
//       if(!response.ok){
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json()
//     }) //.json return the promise which resolve with the result of the parsing body
//     .then((data) => {
//       renderCountry(data[0]);
//       //const neighbour = data[0].borders[0];
//       const neighbour='lhdfsl'
//       if (!neighbour) {
//         return;
//       }
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if(!response.ok){
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json()
//     })
//     .then((data) => renderCountry(data[0], "neighbour")).
//     catch(err=>{
//         // console.error(`${err}! Please try again`);
//         renderError(`${err.message}! Please try again`);
//     }).finally(()=>{
//         //this block will always run doesn't matter it catches error or not
//         countriesContainer.style.opacity = 1;
//     });
// };

/*----------------------optimised code-----------------------------*/

const getJSON = function (url, ErrorMsg = "Something went wrong") {
  // console.log(url);
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${ErrorMsg} ${response.status}`);
    }
    //console.log(response)
    return response.json();
  });
};
const getCountryData = function (countryName) {
  getJSON(
    `https://restcountries.com/v3.1/name/${countryName}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);

      if (data[0].borders == undefined) {
        throw new Error("No neighbour found!");
      }
      const neighbour = data[0].borders[0];

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country Not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      // console.error(`${err.message} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
getCountryData("Australia");

btn.addEventListener("click", function () {
  getCountryData("India");
});
