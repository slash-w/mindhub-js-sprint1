import {carouselRandomizer, categoryMaker, searcher} from "../scripts/main.js";

const cat = document.getElementsByClassName("check-container");
const carousel = document.getElementById("random-carousel");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((apiData) => {
    const pastEvents = apiData.events.filter(e => e.date < apiData.currentDate)
    carouselRandomizer(pastEvents, carousel);
    categoryMaker(pastEvents, cat);
    searcher(pastEvents, true);
  })
  .catch((error) => console.log(error));