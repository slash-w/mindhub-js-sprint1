function ej1(){
    const mybutton = document.querySelector('button.button1')
    const mybox = document.querySelector('div.box1')
    const colors = ['red', 'skyblue', 'gray']
    let i = 0

    mybutton.addEventListener('click', function (){
        mybox.style=`background-color:${colors[i%3]};`
        mybox.innerHTML = `<span>${colors[i%3]}</span>`
        i++
    })
}

function ej2(){
    const myinput = document.getElementById('ej2-search')
    const mybox = document.querySelector('div.box2')
    const mybutton = document.querySelector('button.button2')

    myinput.addEventListener('keyup', e => {
        mybox.innerHTML = `<span>${e.target.value}</span>`
    })
    mybutton.addEventListener('click', function(){
        myinput.value=''
        mybox.innerHTML = `<span>${myinput.value}</span>`
    })
}

function ej3(){ // kg/m2
    const myheight = document.getElementById('ej3-height')
    const myweight = document.getElementById('ej3-weight')
    const mybox = document.querySelector('div.box3')
    const mybutton = document.querySelector('button.button3')
    
    mybutton.addEventListener('click', function(){
        const calcWeight = parseFloat(myweight.value) / (((parseFloat(myheight.value))/100)**2)
        mybox.innerHTML = `<span>${calcWeight}</span>`
    })
}
function ej4(){
    const peso = document.getElementById('ej4-peso')
    const usd  = document.getElementById('ej4-usd')
    const divisas = 244.94

    peso.addEventListener('keyup', e=> {
        usd.value = parseFloat(e.target.value) / divisas
    })

    usd.addEventListener('keyup', e=> {
        peso.value = parseFloat(e.target.value) * divisas
    })
}