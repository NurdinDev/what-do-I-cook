const menuActiveClass = 'border-red-700';
const mealPlanAPI =
  'https://api.spoonacular.com/recipes/mealplans/generate?apiKey=c4c96f58049e4dc89f038e2503edee89&timeFrame=day';

const newRecipesAPI =
  'https://api.spoonacular.com/recipes/search?query=&apiKey=c4c96f58049e4dc89f038e2503edee89&number=12';

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

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

function getMenuItemActive(navLinks, hash) {
  if (hash) {
    navLinks.forEach(link => {
      const attr = link.getAttribute('href');
      if (attr === hash && !link.classList.contains(menuActiveClass)) {
        link.classList.add(menuActiveClass);
      } else {
        link.classList.remove(menuActiveClass);
      }
    });
  } else if (!navLinks[0].classList.contains(menuActiveClass)) {
    navLinks[0].classList.add(menuActiveClass);
  }
}

function isVisible(ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}

// handle submit form
function submitHandler(e) {
  e.preventDefault();
  const { value } = document.getElementById('search');
  if (value) {
    window.location.href = `/search.html?q=${value}`;
  }
}

function appendMealPlanData(data) {
  const appendCards = document.querySelector('#mealPlan .data-content');
  data.forEach(results => {
    appendCards.innerHTML += getCard(results);
  });
}

function appendNewRecipes(data) {
  const appendCards = document.querySelector('.new-recipes-data');
  data.forEach(results => {
    appendCards.innerHTML += getCard(results);
  });
}

function fetchMealPlan() {
  fetch(mealPlanAPI)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        appendMealPlanData(data.meals);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}

function fetchNewRecipes() {
  fetch(newRecipesAPI)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status Code: ${response.status}`
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        appendNewRecipes(data.results);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
ready(function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const heroSection = document.getElementById('hero');
  // const mealPlanSection = document.getElementById('mealPlan');
  // const newRecipeSection = document.getElementById('newRecipe');
  const { hash } = window.location;
  const getRandomHeader = document.querySelector('.getRandomHeader');

  // add active class to active section
  getMenuItemActive(navLinks, hash);
  // listen on click menu item
  // add active class
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const hashFromLink = link.getAttribute('href');
      getMenuItemActive(navLinks, hashFromLink);
    });
  });

  // fetches
  fetchMealPlan();
  fetchNewRecipes();

  window.addEventListener(
    'scroll',
    function() {
      // hide or show random button on header while scrolling out side hero section.
      if (isVisible(heroSection)) {
        getRandomHeader.classList.add('hidden');
      } else {
        getRandomHeader.classList.remove('hidden');
      }
    },
    false
  );
});
