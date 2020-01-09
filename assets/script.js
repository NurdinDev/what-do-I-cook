const menuActiveClass = 'border-red-700';

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

function getMenuItemActive(navLinks, hash) {
  console.log(hash);
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

ready(() => {
  const navLinks = document.querySelectorAll('.nav-links a');
  getMenuItemActive(navLinks, window.location.hash);
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const hash = link.getAttribute('href');
      getMenuItemActive(navLinks, hash);
    });
  });
});
