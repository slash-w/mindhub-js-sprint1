//      TEMPLATES
function noResultsTemplate(){
  return`
  <h3 class="not-found-msg"><span class="icon-conatiner"><i class="fa-solid fa-circle-exclamation error-icon"></i></span>
  No se encontraron resultados</h3>
  `
}

function tableStatTemplate(a, b, c) {
  return `
    <tr>
      <td>${a}</td>
      <td>${b}</td>
      <td>${c}</td>
    </tr>
  `;
}

export function detailTemplate(event) {
  return `
    <img src="${event.image}" alt="evento">
    <section class="details">
        <h1>${event.name}</h1>
        <p>Date: ${event.date}</p>
        <p>${event.description}</p>
        <p>Place: ${event.place}</p>
        <p>Capacity: ${event.capacity}</p>
        <p>Estimate: ${event.assistance}</p>
        <p>Price: ${event.price}</p>
    </section>`;
}

function cardTemplate(event, index = false) {
  let det_link = "./details.html";
  if (index) {
    det_link = "./assets/pages/details.html";
  }
  return `
    <div class="card" style="background-image: url(${event.image}");>
        <div class="card-body">
            <h4 class="title">${event.name}</h4>
            <span class="descr">${event.description}</span>
            <div class="card-footer">
                <span class="price">$${event.price}</span>
                <a class="view-more" style="scroll-padding:10rem" href=${det_link}?_id=${event._id}>view more</a>
            </div>
        </div>
    </div>
  `;
}

function carouselItemTemplate(carItem, index, active = "") {
  let det_link = "./details.html";
  if (index) {
    det_link = "./assets/pages/details.html";
  }
  return `
    <div class="carousel-item ${active}">
        <img class="car-image" src="${carItem.image}">
        <a class="car-button" href="${det_link}?_id=${carItem._id}">${carItem.name}</a>
    </div>
    `;
}

function checkCategoryTemplate(categ) {
  return `
    <div class="myCheck">
        <input type="checkbox" id="cat-${categ}" value="${categ}">
        <label>${categ}</label>
    </div>`; //si agrego for=${categ} hay un bug extraño donde si clickeo en el texto pinneo la categoria hasta que vuelva a clickearlo
}

//      GOODIES (max, min]
function randint(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

//      MAIN FUNCTIONS
function templateToHTML(arr, docElem, ftemp, ftempFlag = false) {
  let template = "";
  for (let a of arr) {
    template += ftemp(a, ftempFlag);
  }
  docElem.innerHTML = template;
}

//      CREATE/DISPLAY CATEGORIES
export function categoryMaker(arr, elmnt) {
  let catgs = arr.map((j) => {
    return j.category;
  });
  catgs = catgs.filter((value, i, arr) => arr.indexOf(value) == i);

  for (let i of elmnt) templateToHTML(catgs, i, checkCategoryTemplate);
  return catgs;
}

//      CAROUSEL - FEATURED EVENTS
export function carouselRandomizer(events, carousel, index) {
  let arr = [...events];
  let template = "";
  for (let i = 0; i <= 5; i++) {
    let x = randint(arr.length);
    if (i == 0) {
      template += carouselItemTemplate(arr[x], index, "active");
    } else {
      template += carouselItemTemplate(arr[x], index);
    }
    arr.splice(x, 1);
  }
  carousel.innerHTML += template;
}

//      FILTERING THROW INPUT & CATEGORIES
export function searcher(arr, index = false) {
  const card = document.getElementById("cards-container");
  const mychecks = document.querySelectorAll(".check-container");
  const search_box = document.querySelectorAll(".mySearchBox");
  let checks = [];
  let search = [];
  let searchValue = "";
  let filteredArr = [];

  templateToHTML(arr, card, cardTemplate, index);
  for (let i = 0; i < mychecks.length; i++) {
    // - - - - - - CATEGORIES - - - - - -
    mychecks[i].addEventListener("change", function () {
      let catgs = Array.from(
        document.querySelectorAll(".myCheck input[type=checkbox]:checked")
      ).map((e) => e.value);
      checks = arr.filter((i) => catgs.includes(i.category));

      if (checks.length === 0) {
        filteredArr = search;
      } else {
        filteredArr = checks.filter(
          (e) => search.includes(e) || searchValue == ""
        );
      }

      if (searchValue === "" && checks.length === 0) {
        filteredArr = arr;
      }
      if(filteredArr.length==0){card.innerHTML = noResultsTemplate()}
      else{templateToHTML(filteredArr, card, cardTemplate, index);}
    });

    // - - - - - - INPUT SEARCH - - - - - -
    search_box[i].addEventListener("keyup", (e) => {
      searchValue = e.target.value;
      search = arr.filter((a) =>
        a.name.trim().toLowerCase().includes(searchValue.trim().toLowerCase())
      );

      filteredArr = search.filter(
        (e) => checks.includes(e) || checks.length == 0
      );

      if (searchValue === "" && checks.length === 0) {
        filteredArr = arr;
      }
      if(filteredArr.length==0){card.innerHTML = noResultsTemplate()}
      else{templateToHTML(filteredArr, card, cardTemplate, index);}
    });
    
    templateToHTML(arr, card, cardTemplate, index);
  }
}

//    STATS
//    top N percentages in basis of 2 properties
function topN_percentage(arr, ofWhat, total, n, min2max = true) {
  let myarr = [...arr];

  myarr.sort((a, b) => {
    if (a[ofWhat] / a[total] > b[ofWhat] / b[total]) {
      return -1 + min2max + min2max;
    } else if (a[ofWhat] / a[total] < b[ofWhat] / b[total]) {
      return (-1 + min2max + min2max) * -1;
    }
    return 0;
  });
  return myarr.slice(0, n);
}

//    top N of the ofWhat property
function topN(arr, ofWhat, n, min2max = true) {
  let myarr = [...arr];

  myarr.sort((a, b) => {
    if (a[ofWhat] > b[ofWhat]) {
      return -1 + min2max + min2max;
    } else if (a[ofWhat] < b[ofWhat]) {
      return (-1 + min2max + min2max) * -1;
    }
    return 0;
  });
  return myarr.slice(0, n);
}

//    - - - - - Event Statistics - - - - -
export function topAttendance(arr, currDate) {
  const myarr = arr.filter((e) => e.date < currDate);
  const topArr = topN_percentage(myarr, "assistance", "capacity", 1, false);

  return topArr
}

export function lowestAttendance(arr, currDate) {
  const myarr = arr.filter((e) => e.date < currDate);
  const lowArr = topN_percentage(myarr, "assistance", "capacity", 1);

  return lowArr
}

export function topCapacity(arr, currDate) {
  const myarr = arr.filter((e) => e.date < currDate);
  const topArr = topN(myarr, "capacity", 1, false);
  console.log('top array >>>', topArr)
  return topArr
}

//     - - - - - Events by Category - - - - -
export function pastFuture(array, currDate, past = false) {
  let arr = [...array];
  if (past) {
    return arr.filter((e) => e.date < currDate);
  } else {
    return arr.filter((e) => e.date >= currDate);
  }
}

export function categoriesTable(arr) {
  let categs = arr.map((e) => e.category);
  categs = new Set(categs);
  return Array.from(categs);
}

export function revenue(arr, cat, currDate) {
  let revenue = 0;
  let ppty;

  if (arr[0].date < currDate) {
    ppty = "assistance";
  } else {
    ppty = "estimate";
  }
  arr
    .filter((e) => e.category == cat)
    .map((e) => (revenue += e[ppty] * e.price));

  return revenue;
}

export function attdce(arr, cat, currDate) {
  let percentage;
  let ppty;
  if (arr[0].date < currDate) {
    ppty = "assistance";
  } else {
    ppty = "estimate";
  }
  percentage = arr
    .filter((e) => e.category == cat)
    .map((e) => (e[ppty] / e.capacity) * 100);
  
  if(percentage.length == 0){return 0} 

  let totAttdce = percentage.reduce(
    (accum, curr) => accum + curr
  ) / percentage.length;

  return `${totAttdce.toFixed(2)} %`;
}

//    GENERATE TABLES
export function generateStatTable(arr, date, container) {
  let topAttdce = topAttendance(arr, date);
  let lowAttdce = lowestAttendance(arr, date);
  let top_capacity = topCapacity(arr, date);
  container.innerHTML += tableStatTemplate(
    `${topAttdce[0].name} - ${attdce(topAttdce, topAttdce[0].category, date)}`,
    `${lowAttdce[0].name} - ${attdce(lowAttdce, lowAttdce[0].category, date)}`,
    `${top_capacity[0].name} - ${top_capacity[0].category}`
  )
}

export function generateCatTables(arr, cat, date, container) {
  let rev;
  let att;
  
  for (let i of cat) {
    att = attdce(arr, i, date);
    if(att === 0){continue};
    rev = revenue(arr, i, date).toLocaleString();
    
    container.innerHTML += tableStatTemplate(
      i,
      `$ ${rev}`,
      att
    );
  }
}
