import {carouselRandomizer} from "../scripts/main.js";

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((apiData) => {
    const carousel = document.getElementById('random-carousel')
    carouselRandomizer(apiData.events, carousel)
  })
  .catch((error) => console.log(error));