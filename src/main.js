"use strict";
import { differenceInYears } from 'date-fns'

const day = document.getElementById("day");
const month = day.nextElementSibling;
const year = month.nextElementSibling;

const calcBtn = year.nextElementSibling;

calcBtn.addEventListener("click", (e) => {
    if (day.value >= 1 && day.value <= 31 && month.value >= 1 && month.value <= 12 && year.value >= 1900 && year.value <= 2017) {      
        const birthDate = new Date(year.value, month.value - 1, day.value);
        const age = differenceInYears(new Date(), birthDate);
        if (age >= 18) {
            alert('You can drink alcohol')
        } else if (age < 18) {
            alert('You can drink JUIСE')
        }
    }
    e.preventDefault()
});
