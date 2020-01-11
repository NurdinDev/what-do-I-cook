# What Do I Cook?

### Sample website for search and get random recipes

# TODO

## General

- [x] build first HTML structure
- [x] meta tags
- [x] add tailwindcss using CDN `<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">`
- [x] add style.css header
- [x] add script.js in the footer
- [x] build header with links
  - [x] link to home page
  - [x] link to meal plan section
  - [x] button to get random recipe
  - [x] JS: fix the header on scroll
  - [x] JS: hide Get Random button in hero section and show in the others
  - [x] JS: smooth scroll for sections
  - [x] JS: active menu item on each section
- [x] add footer the website
  - [x] link to my repo
  - [x] made with love ♥️

## Home page

- [x] build hero page
  - [x] full screen hight
  - [x] JS: show random background using API like `https://source.unsplash.com/1600x900/?cooking`
- [x] add search input with submit button
  - [x] handle press enter and button to submit search
  - [x] JS: on submit open search page with send value as query string
- [x] add `Get Random` button
  - [x] on click open random page
- [x] Meal Plan section
  - [x] add header
  - [x] fetch data from API `https://api.spoonacular.com/recipes/mealplans/generate`
  - [x] show items as a grid
    - [x] 3 in the row for desktop
    - [x] 2 in the row for tablet
    - [x] 1 in the row for mobile
- [x] New Recipes section
  - [x] JS: fetch data
  - [x] show items as a grid
    - [x] 3 in the row for desktop
    - [x] 2 in the row for tablet
    - [x] 1 in the row for mobile

## Search Page

- [x] show search input with search value
- [x] load 10 items
- [x] show load more to fetch more data
- [x] show loading spinner while fetching
- [x] show result items as a grid
  - [x] 3 in the row for desktop
  - [x] 2 in the row for tablet
  - [x] 1 in the row for mobile

## Random Page

- [x] JS: fetch data from: https://api.spoonacular.com/recipes/random
- [x] JS: presenting data in the page
- [x] add title of the page
- [x] add one recipe card in the middle
- [x] js: fetch 10 item and refetch again before the end
- [x] js: show next and previous item

## Single Recipe Page

- the page smeller to this page https://spoonacular.com/recipes/pan-fried-potato-wedges-1099404

- [ ] show cover in the page
- [ ] show the title middle of the cover
- [ ] show ingredients section
- [ ] add responsive table of ingredients
- [ ] JS: show fetching loader


# Performance enhancements

- [ ] save copy of API data in global window object
- [ ] show loading in home page until fetch the data
- [ ] in random page fetch 3 items each time to show quick results
