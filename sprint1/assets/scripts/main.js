//      TEMPLATES
function detailTemplate(event) {
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

//      GOODIES
function randint(max, min = 0) {
  //  (max, min]
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
function categoryMaker(arr, elmnt) {
  let c = arr.map((j) => {
    return j.category;
  });
  c = c.filter((value, i, arr) => arr.indexOf(value) == i);

  for (let i of elmnt) templateToHTML(c, i, checkCategoryTemplate);
  return c;
}

//      CAROUSEL - FEATURED EVENTS
function carouselRandomizer(events, carousel, index) {
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

//      FILTERING THROW CATEGORIES
function searcher(arr, index) {
  const card = document.getElementById("cards-container");
  const mychecks = document.querySelectorAll(".check-container");
  const search_box = document.querySelectorAll(".mySearchBox");

  templateToHTML(arr, card, cardTemplate, index);
  for (let i = 0; i < mychecks.length; i++) {
    mychecks[i].addEventListener("change", (e) => {
      let checkbox = Array.from(
        document.querySelectorAll(".myCheck input[type=checkbox]:checked")
      ).map((e) => e.value);
      filteredArr = arr.filter((a) => checkbox.includes(a.category));

      templateToHTML(filteredArr, card, cardTemplate, index);
      if (checkbox.length == 0) {
        templateToHTML(a, card, cardTemplate, index);
      }
    });
    search_box[i].addEventListener("keyup", (e) => {
      filteredArr = arr.filter((a) =>
        a.name
          .trim()
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
      );
      console.log(filteredArr);
      templateToHTML(filteredArr, card, cardTemplate, index);
  });
}
}
