import {carouselRandomizer, categoryMaker, searcher} from "./main.js";

const cat = document.getElementsByClassName("check-container");
const carousel = document.getElementById("random-carousel");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((apiData) => {
    carouselRandomizer(apiData.events, carousel, true);
    categoryMaker(apiData.events, cat);
    searcher(apiData.events, true);
  })
  .catch((error) => console.log(error));