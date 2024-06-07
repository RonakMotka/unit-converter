/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lenEl = document.getElementById("len-el")
const volEl = document.getElementById("vol-el")
const masEl = document.getElementById("mas-el")

function meterToFeet(val) {
    let total = Number(val) * 3.2808
    return total.toFixed(3)
}

function feetToMeter(val) {
    let total = Number(val) * 0.3048
    return total.toFixed(3)
}

function literToGallon(val) {
    let total = Number(val) * 0.2642
    return total.toFixed(3)
}

function gallonToLiter(val) {
    let total = Number(val) * 3.7854
    return total.toFixed(3)
}

function kiloToPound(val) {
    let total = Number(val) * 2.2046
    return total.toFixed(3)
}

function poundToKilo(val) {
    let total = Number(val) * 0.4536
    return total.toFixed(3)
}


function length(val) {
    const feet = meterToFeet(val)
    const meters = feetToMeter(val)
    let output = `${val} meters = ${feet} feet | ${val} feet = ${meters} meters`
    return output 
}

function volume(val) {
    const gallons = literToGallon(val)
    const liters = gallonToLiter(val)
    let output = `${val} liters = ${gallons} gallons | ${val} gallons = ${liters} liters`
    return output 
}

function mass(val) {
    const pounds = kiloToPound(val)
    const kilos = poundToKilo(val)
    let output = `${val} kilos = ${pounds} pounds | ${val} pounds = ${kilos} kilos`
    return output 
}


convertBtn.addEventListener("click", function(){
    let val = inputEl.value
    const lengthVal = length(val)
    const volumeVal = volume(val)
    const massVal = mass(val)

    lenEl.innerHTML = lengthVal
    volEl.innerHTML = volumeVal
    masEl.innerHTML = massVal
    inputEl.value = ""
})

inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convertBtn.click();
    }
})

inputEl.addEventListener('input', resizeInput);
resizeInput.call(inputEl);

function resizeInput() {
    if (this.value.length > 3) {
        this.style.width = this.value.length + "ch";
    } else {
        this.style.width = "150px"
    }
}


inputEl.addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});
