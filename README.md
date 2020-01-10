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
  - [x] link to meal plan section
  - [x] button to get random recipe
  - [x] JS: fix the header on scroll
  - [ ] JS: hide Get Random button in hero section and show in the others
  - [x] JS: smooth scroll for sections
  - [x] JS: active menu item on each section
- [x] add footer the website
  - [x] link to my repo
  - [x] made with love ♥️

## Home page

- [x] build hero page
  - [x] full screen hight
  - [ ] JS: show random background using API like `https://source.unsplash.com/1600x900/?cooking`
- [x] add search input with submit button
  - [ ] handle press enter and button to submit search
  - [ ] JS: on submit open search page with send value as query string
- [x] add `Get Random` button
  - [x] on click open random page
- [x] Meal Plan section
  - [x] add header
  - [ ] fetch data from API `https://api.spoonacular.com/recipes/mealplans/generate`
  - [x] show items as a grid
    - [x] 3 in the row for desktop
    - [x] 2 in the row for tablet
    - [x] 1 in the row for mobile
- [x] New Recipes section
  - [ ] JS: fetch data from :
  - [x] show items as a grid
    - [x] 3 in the row for desktop
    - [x] 2 in the row for tablet
    - [x] 1 in the row for mobile

## Search Page

- [ ] show search input with search value
- [ ] show result items as a grid
  - [ ] 3 in the row for desktop
  - [ ] 2 in the row for tablet
  - [ ] 1 in the row for mobile

## Random Page

- [ ] JS: fetch data from: https://api.spoonacular.com/recipes/random
- [ ] JS: presenting data in the page
- [x] add title of the page
- [x] add one recipe card in the middle
- [ ] js: fetch 10 item and refetch again before the end
- [ ] js: show next and previous item

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
