const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thankyou-container");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const ratingButtons = document.querySelectorAll(".btn");
ratingButtons.forEach((rate) => {
  rate.addEventListener("click", () => (rating.innerHTML = rate.innerHTML));
});
submitButton.addEventListener("click", () => {
  thanksContainer.classList.add("show");
  mainContainer.classList.add("hide");
});
