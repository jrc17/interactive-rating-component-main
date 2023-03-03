// console.log(ratingEL);
const submitBtn = document.querySelector(".btn");
const ratingEL = document.querySelector(".rating-state");
const thankEL = document.querySelector(".thank-you-state");
const ratingBtn = document.querySelectorAll(".rating span");
const userRatingEl = document.querySelector(".user-rating-number");

let rated = false;

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

submitBtn.addEventListener("click", function () {
  if (rated) {
    ratingEL.classList.add("hidden");
    thankEL.classList.remove("hidden");
  } else {
    alert("Please select a number to rate");
  }
});
