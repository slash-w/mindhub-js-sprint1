//      TEMPLATES
function cardTemplate(event, index=false){
    let det_link='./details.html'
    if(index){det_link='./assets/pages/details.html'}
    return `
    <div class="card" style="background-image: url(${event.image}");>
        <div class="card-body">
            <h4 class="title">${event.name}</h4>
            <span class="descr">${event.description}</span>
            <div class="card-footer">
                <span class="price">$${event.price}</span>
                <a class="view-more" style="scroll-padding:10rem" href=${det_link}>view more</a>
            </div>
        </div>
    </div>
  `
}

function carouselItemTemplate(carItem, active = './details.html'){
    return `
    <div class="carousel-item ${active}">
        <img class="car-image" src="${carItem.image}">
        <a class="car-button" href=#>${carItem.name}</a>
    </div>
    `
}

function checkCategoryTemplate(categ, num){
    return `
    <div class="myCheck">
        <input type="checkbox" id="category${num}" value="${categ}">
        <label for="category${num}">${categ}</label>
    </div>`
}

//      GOODIES
function randint(max, min = 0){     //  (max, min]
    return(Math.floor(Math.random() * (max - min) + min))
}

//      MAIN FUNCTIONS
function cardsFilter(events, date, eventDate = 0){
    let card = document.getElementById('cards-container')
    let cat = document.getElementsByClassName('check-container')

    let card_template = ''

    let check_template = ''
    let arr_cat=[]

    let i = 0

    for (let e of events){
        if(eventDate==0){
            i++
            card_template += cardTemplate(e, true)
            if(!(arr_cat.includes(e.category))){
                check_template += checkCategoryTemplate(e.category, i)
                arr_cat.push(e.category)
            }

        }else if((eventDate == 1) && (e.date >= date)){
            i++
            card_template += cardTemplate(e)
            if(!(arr_cat.includes(e.category))){
                check_template += checkCategoryTemplate(e.category, i)
                arr_cat.push(e.category)
            }

        }else if((eventDate == 2) && (e.date < date)){
            i++
            card_template += cardTemplate(e)
            if(!(arr_cat.includes(e.category))){
                check_template += checkCategoryTemplate(e.category, i)
                arr_cat.push(e.category)
            }

        }else{
            continue
        }
    }

    console.log('---------------CARDS---------------')
    console.log(card_template)
    console.log('---------------CHECK---------------')
    console.log(check_template)

    card.innerHTML = card_template
    for (let j=0; j < cat.length; j++){
        cat[j].innerHTML = check_template
        console.log(cat[j], '<------ cat J')
    }

    

}

function carouselRandomizer(events){
    let carousel = document.getElementById('random-carousel')
    let arr = [...events]
    let template = ""
    for (let i = 0; i <= 5; i++){
        let x = randint(arr.length)
        if (i==0){
            template += carouselItemTemplate(arr[x], 'active')
        }else{
            template += carouselItemTemplate(arr[x])
        }
        arr.splice(x, 1)
    }
    console.log('-------------------CAROUSEL-------------------')
    console.log(template)
    carousel.innerHTML += template
}