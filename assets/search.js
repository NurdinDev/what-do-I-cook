const searchAPI =
  'https://api.spoonacular.com/recipes/search?apiKey=c4c96f58049e4dc89f038e2503edee89';
const urlParams = new URLSearchParams(window.location.search);

const loadMoreButton = document.querySelector('.load-more');

const resultsArray = [];

function getCard(params) {
  return `
    <div class="md:w-1/2 lg:w-1/3 py-4 px-4">
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
                      src = "https://spoonacular.com/recipeImages/${params.id}-556x370.jpg"
                      class="h-48 rounded-lg w-full object-cover"
                    />
                    <div class="py-2 px-2">
                      <div class="my-3 font-bold font-title text-center">
                        ${params.title}
                      </div>
                    </div>
                  </div>
                </a>
            </div>
            `;
}

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

function appendData(data) {
  // append search value in appropriate place
  if (data.results.length) {
    const appendValue = document.querySelectorAll('.append-value-here');
    appendValue.forEach(element => {
      if (!element.innerHTML) {
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden');
        }
        element.append(urlParams.get('q'));
      }
    });
  }

  const appendCards = document.querySelector('.append-cards-here');
  data.results.forEach(results => {
    appendCards.innerHTML += getCard(results);
  });

  // show load more button
  if (data.totalResults > resultsArray.length) {
    loadMoreButton.classList.remove('hidden');
  }
}

function fetching(state) {
  const loader = document.querySelector('.loader');
  if (state) {
    loader.classList.remove('hidden');
  } else {
    loader.classList.add('hidden');
  }
}

function showMessage() {
  const element = document.querySelector('.no-result-message');
  element.classList.remove('hidden');
}

function doFetch(query) {
  fetching(true);
  fetch(`${searchAPI}&query=${query}&offset=${resultsArray.length}`)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        if (!resultsArray.length && !data.results.length) {
          showMessage();
        }
        resultsArray.push(...data.results);
        appendData(data);
      });

      fetching(false);
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

ready(function() {
  if (urlParams.has('q')) {
    doFetch(urlParams.get('q'));
  }

  loadMoreButton.addEventListener('click', function() {
    doFetch(urlParams.get('q'));
  });
});
