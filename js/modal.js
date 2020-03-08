var button = document.querySelector(".search-btn");
var popup = document.querySelector(".search-modal");
var arrival = popup.querySelector("[name=arrival-date]");
var departure = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=number-of-adults]");
var childrens = popup.querySelector("[name=number-of-childrens]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-modal-hidden");
  arrival.classList.remove("modal-error");
  departure.classList.remove("modal-error");
  adults.classList.remove("modal-error");
  childrens.classList.remove("modal-error");
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !childrens.value) {
    evt.preventDefault();
    arrival.classList.add("modal-error");
    departure.classList.add("modal-error");
    adults.classList.add("modal-error");
    childrens.classList.add("modal-error");
    console.log("Нужно ввести даты заезда и выезда, а также количество взрослых и детей");
  } else {
    localStorage.setItem("arrival", arrival.value);
    localStorage.setItem("departure", departure.value);
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("childrens", childrens.value);
  }
});
