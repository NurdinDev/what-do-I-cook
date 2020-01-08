# What Do I Cook?

### Sample website for search and get random recipes

# TODO

## General

- [x] build first HTML structure
- [x] meta tags
- [x] add tailwindcss using CDN `<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">`
- [x] add style.css header
- [x] add script.js in the footer
- [ ] build header with links
  - [ ] link to home page
  - [ ] link to meal plan section
  - [ ] link to who's section
  - [ ] button to get random recipe
  - [ ] JS: fix the header on scroll
  - [ ] JS: hide Get Random button in hero section and show in the others
- [x] add footer the website
  - [x] link to my repo
  - [x] made with love ♥️

## Home page

- [ ] build hero page
  - [ ] full screen hight
  - [ ] JS: show random background using API like `https://source.unsplash.com/1600x900/?cooking`
- [ ] add search input with submit button
  - [ ] add action on click enter to submit
  - [ ] add action on the button to submit the search
  - [ ] JS: on submit open search page with send value as query string
- [ ] add `Get Random` button
  - [ ] JS: on click open random page
- [ ] Meal Plan section
  - [ ] add header
  - [ ] fetch data from API `https://api.spoonacular.com/recipes/mealplans/generate`
  - [ ] show items as a grid
    - [ ] 3 in the row for desktop
    - [ ] 2 in the row for tablet
    - [ ] 1 in the row for mobile
- [ ] New Recipes section
  - [ ] JS: fetch data from :
  - [ ] show items as a grid
    - [ ] 3 in the row for desktop
    - [ ] 2 in the row for tablet
    - [ ] 1 in the row for mobile

## Search Page

- [ ] show search input with search value
- [ ] show result items as a grid
  - [ ] 3 in the row for desktop
  - [ ] 2 in the row for tablet
  - [ ] 1 in the row for mobile

## Random Page

- [ ] JS: fetch data from: https://api.spoonacular.com/recipes/random
- [ ] add title of the page
- [ ] add one recipe card in the middle
- [ ] add `Get Random` button down to show next item

## Single Recipe Page

- the page smeller to this page https://spoonacular.com/recipes/pan-fried-potato-wedges-1099404

- [ ] show cover in the page
- [ ] show the title middle of the cover
- [ ] show ingredients section
- [ ] add responsive table of ingredients

## Similar To Page

- Giving list of recipes similar to the passed recipe

- [ ] JS: fetch data from : https://api.spoonacular.com/recipes/{id}/similar
- [ ] JS: pass the passed recipe from URL
- [ ] show grid of results

# Card UI

- the user can able to see:
  - [ ] recipe image as a cover
  - [ ] title and sub-title overlay the card
  - [ ] option to show similar recipes "redirect to similar page"

# Performance enhancements

- [ ] save copy of API data in global window object
- [ ] show loading in home page until fetch the data
- [ ] in random page fetch 3 items each time to show quick results
