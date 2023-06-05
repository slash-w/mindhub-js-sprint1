function ejercicio1(a){
    for(let i=1; i<11; i++){
        console.log(a*i)
    }
}

function ejercicio2(){
    let a=0
    let b
    console.log('*** enter 0 to exit ***')
    do{
        b = parseInt(prompt(`${a} +: `))
        a += parseInt(b)
    } while(b!=0)
    console.log(`a = ${a}`)
    return a
}

function ejercicio3(a){
    if(a < 1){a=1}
    else if(a > 100){a=100}
    let b
    do{
        b = parseInt(prompt('>>>'))
        if(b > a){
            console.log('menos -')
        }else{
            console.log('mas +')
        }
    } while(a != b)
    return
}

function ejercicio4(a){
    let div = [1]
    for(let i=2; i<=Math.floor(a/2); i++){
        if((a%i)==0){div.push(i)}
    }
    if(a!=1){div.push(a)}
    console.log(div)
}

function ejercicio5(arr){
    for(a of arr){
        console.log(a)
    }
}

function ejercicio6(arr){
    for(a of arr){
        console.log(a*2)
    }
}

function ejercicio7(arr){
    for(a of arr){
        console.log(
`Name:${a.name}
Age:${a.age}
Relation:${a.rel}`)
    }
}

function ejercicio8(){//??? No figura en la guia
    return
}

function ejercicio9(arr){
    for(a of arr){
        if((a%2)===1){
            console.log(a)
        }
    }
}

function ejercicio10(){
    let even = 0
    let odd  = 0
    let a

    do{
        a = parseInt(prompt('Number: '))
        if((a%2)===0){even +=a}
        else{odd +=a}
    }while(a!=0)
    console.log(`Even:${even}`)
    console.log(`Odd: ${odd}`)
}

function ejercicio11(arr){
    let flag=true
    let max

    for(a of arr){
        if(flag){flag=false; max=a}
        else if(a > max){max=a}
    }
    console.log(max)
}

console.log('---------EJERCICIO 1---------')
//ejercicio1(1)

console.log('---------EJERCICIO 2---------')
//let secret_num = ejercicio2()

console.log('---------EJERCICIO 3---------')
//ejercicio3(secret_num)

console.log('---------EJERCICIO 4---------')
//ejercicio4(111)

console.log('---------EJERCICIO 5---------')
//ejercicio5([1,2,3,4,5,6,7,8,9])

console.log('---------EJERCICIO 6---------')
//ejercicio6([1,2,3,4,5,6,7,8,9])

console.log('---------EJERCICIO 7---------')
let fam=[
    {
        name:'Juan',
        age:45,
        rel:'Father',
    },
    {
        name:'Avril',
        age:40,
        rel:'Mother',
    },
    {
        name:'Dante',
        age:7,
        rel:'Son',
    },
    {
        name:'Sofia',
        age:3,
        rel:'Daughter',
    },
    {
        name:'Fabiana',
        age:65,
        rel:'Grandmother',
    },
]
//ejercicio7(fam)

console.log('---------EJERCICIO 8---------')
//ejercicio8() //??? No figura en la guia

console.log('---------EJERCICIO 9---------')
//ejercicio9([1,2,3,4,5,6,7,8,9])

console.log('---------EJERCICIO 10---------')
//ejercicio10()

console.log('---------EJERCICIO 11---------')
//ejercicio11([1,2,3,4,888,5,6,7,8,9])