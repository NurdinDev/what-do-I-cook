const randomAPI =
  'https://api.spoonacular.com/recipes/random?apiKey=c4c96f58049e4dc89f038e2503edee89&number=10';

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

const dataArray = [];
let pointer = 0;

function preloadImage(url) {
  const img = new Image();
  img.src = url;
}

function getCard(params) {
  return `
                <a href=/single.html?id=${params.id}>
                  <div
                    class="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg"
                  >
                  <div
                      class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500"
                    >
                      ready in ${params.readyInMinutes} minutes
                    </div>
                    <img
                      alt=""
                      src = "https://spoonacular.com/recipeImages/${params.id}-636x393.jpg"
                      class="rounded-lg w-full object-cover"
                    />
                    <div class="py-2 px-2">
                      <div class="my-3 font-bold font-title text-center">
                        ${params.title}
                      </div>
                    </div>
                  </div>
                </a>
            `;
}

function appendData() {
  const appendCards = document.querySelector('.randomData');
  appendCards.innerHTML = getCard(dataArray[pointer]);
}

function fetchData() {
  fetch(randomAPI)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        data.recipes.forEach(item => {
          preloadImage(
            `https://spoonacular.com/recipeImages/${item.id}-636x393.jpg`
          );
        });
        dataArray.push(...data.recipes);
        appendData();
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function next() {
  if (pointer === dataArray.length - 4) {
    fetchData();
  }
  pointer += 1;
  appendData();
}

function back() {
  if (pointer === 0) {
    return;
  }
  pointer -= 1;
  appendData();
}

ready(function() {
  fetchData();
  document.querySelector('.next').addEventListener('click', () => next());
  document.querySelector('.back').addEventListener('click', () => back());
});
