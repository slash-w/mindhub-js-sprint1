//      --- NRO 1 ---
/*
let a
let b

a = prompt('number a: ')
b = prompt('number b: ')

console.log('is a > b?: ' + String(a > b))
*/

//      --- NRO 2 ---
/*
let a
let b

a = prompt('number a: ')
b = prompt('number b: ')

console.log('is a = b?: ' + String(a===b))
*/

//      --- NRO 3 ---
/*
let a
let b

a = parseInt(prompt('number a: '))
b = parseInt(prompt('number b: '))

if (a > b){
    console.log('a is greater than b')
} else if (b > a){
    console.log('b is greater than a')
} else{
    console.log('a is equal to b')
}
*/

//      --- NRO 4 ---
/*
let a
let b
let c

a = parseInt(prompt('Numero a: '))
b = parseInt(prompt('Numero b: '))
c = parseInt(prompt('Numero c: '))

console.log(Math.min(a,b,c))
*/

//      --- NRO 5 ---
/*
let person1
let person2

person1 = {
    name: prompt('Name p1: '),
    age: parseInt(prompt('Age p1: ')),
    height: parseFloat(prompt('Height p1: '))
}

person2 = {
    name: prompt('Name p2: '),
    age: parseInt(prompt('Age p2: ')),
    height: parseFloat(prompt('Height p2: '))
}

if (person1.height > person2.height){
    console.log(person1.name + ' is taller')
} else if (person1.height < person2.height){
    console.log(person2.name + ' is taller')
} else{
    console.log('They are the same height')
}

if (person1.age > person2.age){
    console.log(person1.name + ' is older')
} else if (person1.age < person2.age){
    console.log(person2.name + ' is older')
} else{
    console.log('They are the same height')
}
*/

//      --- NRO 6 ---

/*
 nombre, edad, altura, visión y 
permita determinar si estás capacitado para conducir. La persona deberá cumplir con una 
edad mínima de 18 años, medir más de 150 cm y tener una visión de 8 de 10 como mínimo.*/

let me
me = {
    age: parseInt(prompt('Age: ')),
    height: parseFloat(prompt('Height (cm): ')),
    sight: parseInt(prompt('Sight (0-10): '))
}

if ((me.age >= 18) && (me.height >= 150) && (me.sight >= 8)){
    console.log('Can drive')
} else{
    console.log("Can't drive")
}