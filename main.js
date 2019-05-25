'use strict';
const body = document.querySelector('body');
const nameInput = document.querySelector('.name');
const phoneNumber = document.querySelector('.number');
const submitButton = document.querySelector('.submit');
const nameValidationRE = /([a-z]*\s[a-z]*((\s([a-z]*))?)$)/i;
const numberValidationRE = /(\+380)?(380)?0[- ]?\d\d[- ]?\d\d\d[- ]?\d\d[- ]?\d\d$/;
const checkboxInfo = document.querySelector('.checkbox');
const phoneRegionInfo = document.querySelector('.phone-region');
const regionSelection = document.querySelector('.region');

nameInput.addEventListener('change', validateName);
function validateName() {
    let valueName = nameInput.value.trim();
    if (nameValidationRE.test(valueName) ) {
        nameInput.classList.add('valid');
        nameInput.classList.remove('invalid');
        return false
    }
    nameInput.classList.remove('valid')
}

phoneNumber.addEventListener('change',validateNumber);
function validateNumber() {
    let valueNumber = phoneNumber.value.trim();
    if (!numberValidationRE.test(valueNumber) ) {
        phoneNumber.classList.remove('valid');
        phoneNumber.classList.add('invalid');
        return false
    }
    phoneNumber.classList.add('valid')
}

checkboxInfo.addEventListener('change', hideInfo);
function hideInfo () {
    phoneRegionInfo.hidden = !phoneRegionInfo.hidden;
}

const center = document.querySelector('.home-city-center');
const north = document.querySelector('.home-city-north');
const east = document.querySelector('.home-city-east');
const south = document.querySelector('.home-city-south');
const west = document.querySelector('.home-city-west');
const lableHomeCity = document.querySelector('.lableHomeCity');

regionSelection.addEventListener('change', showCityList);
function showCityList() {
    if (regionSelection.value === "Center") {
        lableHomeCity.classList.remove('invisible');
        center.classList.remove('invisible')
    } else {
        center.classList.add('invisible');
        lableHomeCity.classList.add('invisible')
    }
    if (regionSelection.value === "North") {
        lableHomeCity.classList.remove('invisible');
        north.classList.remove('invisible')
    } else {
        north.classList.add('invisible');
        lableHomeCity.classList.add('invisible')
    }
    if (regionSelection.value === "East") {
        lableHomeCity.classList.remove('invisible');
        east.classList.remove('invisible')
    } else {
        east.classList.add('invisible');
        lableHomeCity.classList.add('invisible')
    }
    if (regionSelection.value === "South") {
        lableHomeCity.classList.remove('invisible');
        south.classList.remove('invisible')
    } else {
        south.classList.add('invisible');
        lableHomeCity.classList.add('invisible')
    }
    if (regionSelection.value === "West") {
        lableHomeCity.classList.remove('invisible');
        west.classList.remove('invisible')
    } else {
        west.classList.add('invisible');
        lableHomeCity.classList.add('invisible')
    }
}

const form = document.querySelector('.form');
form.addEventListener('input', changeButton);
submitButton.disabled = true;
function changeButton() {
    if (checkboxInfo.checked) {
        if (nameInput.className === 'name valid'){
            submitButton.disabled = false;
        }
    } else {
        if (nameInput.className === 'name valid' && phoneNumber.className === 'number valid'){
            submitButton.disabled = false;
        }
    }
    submitButton.disabled = true;
}

