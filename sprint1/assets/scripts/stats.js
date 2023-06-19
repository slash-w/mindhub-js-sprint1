import {
  carouselRandomizer,
  categoriesTable,
  pastFuture,
  generateCatTables,
  generateStatTable,
} from "../scripts/main.js";

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((apiData) => {
    const carousel = document.getElementById("random-carousel");
    carouselRandomizer(apiData.events, carousel);

    tableInnator(apiData.events, apiData.currentDate);
  })
  .catch((error) => console.log(error));

function tableInnator(apiArr, date) {
  //    Arrays
  const cat = categoriesTable(apiArr, date);
  let pastArr = pastFuture(apiArr, date, true);
  let futrArr = pastFuture(apiArr, date, false);

  //    Tables
  const table1 = document.getElementById("event-table");
  const table2 = document.getElementById("past-table");
  const table3 = document.getElementById("upcoming-table");

  generateStatTable(apiArr,       date, table1);
  generateCatTables(pastArr, cat, date, table2);
  generateCatTables(futrArr, cat, date, table3);
}
