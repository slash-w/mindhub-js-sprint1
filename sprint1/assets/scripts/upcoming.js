import {carouselRandomizer, categoryMaker, searcher} from "../scripts/main.js";

const cat = document.getElementsByClassName("check-container");
const carousel = document.getElementById("random-carousel");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((apiData) => {
    const futureEvents = apiData.events.filter(e => e.date >= apiData.currentDate)
    carouselRandomizer(futureEvents, carousel);
    categoryMaker(futureEvents, cat);
    searcher(futureEvents, true);
  })
  .catch((error) => console.log(error));