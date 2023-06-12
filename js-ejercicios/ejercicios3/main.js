//  ----------- EJ 1 -----------
function ejercicio1(arr, alch){    
    let a = arr.filter(i => i.abv < alch)
    return a.map(i => {
        return {
            nombre: i.name,
            alcohol: i.abv,
            amargor: i.ibu
        }
    })
}

//  ----------- EJ 2 -----------
function ejercicio2(arr){
    let myarr = [...arr]

    myarr.sort((a, b) => {
        if(a.abv > b.abv){
            return -1
        }
        else if(a.abv < b.abv){
            return 1
        }
        return 0
    })
    return myarr.slice(0,10)
}

//  ----------- EJ 3 -----------
function ejercicio3(arr){
    let myarr = [...arr]

    myarr.sort((a, b) => {
        if(a.ibu > b.ibu){
            return 1
        }
        else if(a.ibu < b.ibu){
            return -1
        }
        return 0
    })
    return myarr.slice(0,10)
}

//  ----------- EJ 4 -----------
function ejercicio4(arr, ppty, flag = true){
    let myarr = [...arr]

    myarr.sort((a, b) => {
        if(a[ppty] > b[ppty]){
            return (-1 + flag + flag)
        }
        else if(a[ppty] < b[ppty]){
            return (-1 + flag + flag)*-1
        }
        return 0
    })
    return myarr.slice(0,10)
}

//  ----------- EJ 5 -----------
function tableDotTemplate(a, head=false){
    let tableHD = 'td'
    if(head){tableHD = 'th'}

    return `
    <${tableHD} style="border: 1px solid currentColor">${a}</${tableHD}>
    `
}

function tableRowTemplate(a){
    return `
    <tr>${a}</tr>`
}

function ejercicio5(arr, id){
    const myTable = document.getElementById('sermesa')
    let template = ''
    let row_template = ''

    const props = ["Name", "ABV", "IBU"]    //"Name", "ABV", "IBU"
    let lowerProps = [...props].map(x => x.toLowerCase())

    for(let key of props){
        row_template += tableDotTemplate(key, true)
    }

    for(let i of arr){
        template += tableRowTemplate(row_template)
        row_template = ""
        for(let key of Object.keys(i)){
            if(lowerProps.includes(key)){
                row_template += tableDotTemplate(i[key])
            }
            
        }
    }

    myTable.innerHTML += template


}