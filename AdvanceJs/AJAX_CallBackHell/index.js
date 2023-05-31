"use strictt";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// function getCountries(countryName,currencyName){
//     const request=new XMLHttpRequest(); //using for AJAX calls
//     request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`); //for requesting the data
//     request.send(); //sends the request to the server

//     request.addEventListener('load',function(){
//         const [data]=JSON.parse(this.responseText);//recieves the text from the server..
//         console.log(data);

//         const html=`<article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${data.population}</p>
//           <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//           <p class="country__row"><span>💰</span>${data.currencies[currencyName]['name']}</p>
//         </div>
//       </article>`;
//     //   console.log(data.currencies[currencyName]['symbol']);
//       countriesContainer.insertAdjacentHTML('beforeend',html);
//       countriesContainer.style.opacity=1;
//     });
// }

// getCountries('India','INR');
// getCountries('USA','USD');

function renderCountry(data, className = "") {
  const currencydata = data.currencies;
  const currency = Object.keys(currencydata);
  const currencyName = currencydata[currency[0]]["name"];

  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
    <p class="country__row"><span>💰</span>${currencyName}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

function getCountryandNeighbour(countryName) {
  //AJAX call country1
  const request = new XMLHttpRequest(); //using for AJAX calls
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`); //for requesting the data
  request.send(); //sends the request to the server

  /* Performing the call back hell as we are calling nested functions and one function have to wait for others to execute */
  
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText); //recieves the text from the server..
    console.log(data);
    //render country 1
    renderCountry(data);

    //get neighbour country2
    const [neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) {
      return;
    }
    //AJAX call for neighbouring country
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      // console.log(this.responseText);
      const [neighbourData] = JSON.parse(this.responseText);
      renderCountry(neighbourData, "neighbour");
    });
  });
}

getCountryandNeighbour("India");
//getCountryandNeighbour("USA");


///Asynchronus example

const a=10; //execute 1
const b=20; //execute 2
//this code will run in background and once the task is finished then it will run.
setTimeout(()=>{
  alert(`I am an asynchronus code and Execution process will not wait for me`);
},1000);
console.log(a+b); //execute 3
console.log("hi") //execute 4