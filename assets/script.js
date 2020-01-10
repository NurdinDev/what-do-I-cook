const menuActiveClass = 'border-red-700';

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

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
