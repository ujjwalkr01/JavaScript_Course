let arr = [];
let uniqueArr = [];
let container = document.getElementById("movies");
let selectOrder = document.querySelector("#sort");

async function movie() {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f1a87d30ad8792e0dd1c12ce07d37337&language=en-US&page=1"
    );
    const data = await res.json();

    arr = data.results.map((ele) => ele.release_date.slice(0, 4));

    arr.forEach((ele) => {
      if (!uniqueArr.includes(ele)) {
        uniqueArr.push(ele);
      }
    });

    uniqueArr.sort((a, b) => a - b);
    movieDisplay(uniqueArr, data);

    selectOrder.addEventListener("change", (e) => {
      container.innerHTML = "";
      if (selectOrder.value === "asc") {
        uniqueArr.sort((a, b) => a - b);
        movieDisplay(uniqueArr, data);
      } else {
        uniqueArr.sort((a, b) => b - a);
        movieDisplay(uniqueArr, data);
      }
    });
  } catch (err) {
    console.error(err);
  }
}
movie();

function movieDisplay(uniqueArr, data) {
  uniqueArr.forEach((el) => {
    data.results.filter((ele) => {
      if (el === ele.release_date.slice(0, 4)) {
        const markup = `
                <div class="movie">
                  <img class="poster" src="https://image.tmdb.org/t/p/w500${ele.poster_path}" alt="movie-title">
                   <div>
                     <h2 class="movie-title">${ele.original_title}</h2>
                     <p class="release-year">${el}</p>
                     <p class="movie-overview">${ele.overview}</p>
                   </div>
                </div>
              `;
        container.insertAdjacentHTML("beforeend", markup);
      }
    });
  });
}
