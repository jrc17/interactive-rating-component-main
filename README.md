# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

Interactive rating component built using HTML,CSS and Javascript

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: (https://github.com/jrc17/interactive-rating-component-main)
- Live Site URL: (https://jrc17.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

Learnt about the forEach loop and making sure only the selected rating was greyed out.

```js
ratingBtn.forEach((rate) => {
  rate.addEventListener("click", function () {
    //remove grey class if it is present.
    const rateSelected = document.querySelector(".grey");
    if (rateSelected) {
      rateSelected.classList.remove("grey");
    }
    rate.classList.add("grey");
    userRatingEl.textContent = rate.textContent;
    rated = true;
  });
});
```

### Useful resources

- [JavaScript - Interactive Rating Component - Frontend Mentor Challenge](https://www.youtube.com/watch?v=cQnUopEeZgw&t=1113s) - Learnt how to use the forEach loop. Shows an alternative way to grey out the selected rating, which i did not prefer.

- [Interactive rating component - Frontend Mentor - HTML CSS JAVASCRIPT](https://www.youtube.com/watch?v=Nw4y8cAU70w) - Learnt how to grey out only the last selected rating.

## Author

- Frontend Mentor - [@jrc17](https://www.frontendmentor.io/profile/jrc17)
