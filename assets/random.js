const randomAPI =
  'https://api.spoonacular.com/recipes/random?apiKey=c4c96f58049e4dc89f038e2503edee89';

const ready = callback => {
  if (document.readyState !== 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
};

ready(function() {
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
        console.log(data.recipes[0]);
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
});
