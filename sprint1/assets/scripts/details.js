import { carouselRandomizer, detailTemplate } from "./main.js";


function makeDetails(arr) {
  const detail = document.getElementById("details-card");
  const dTitle = document.getElementById("details-title")
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("_id");

  const event = arr.find((e) => e._id == id);
  detail.innerHTML = detailTemplate(event);
  dTitle.innerHTML = "Details - " + event.name
}

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((apiData) => {
    const carousel = document.getElementById('random-carousel')

    makeDetails(apiData.events)
    carouselRandomizer(apiData.events, carousel)
  })
  .catch((error) => console.log(error));