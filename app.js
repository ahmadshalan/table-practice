'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


function randomCustomers(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}


function Cities(name, minCookies, maxCookies, avgCookies) {

    this.name = name;
    this.minCookies = minCookies;
    this.maxCookies = maxCookies;
    this.avgCookies = avgCookies;
    this.CustomersEachHour = [];
    this.CookiesEachHour = [];
    this.total = 0;


    this.getCustomersEachHour = function () {

        for (let i = 0; i < hours.length; i++) {
            this.CustomersEachHour.push(randomCustomers(minCookies, maxCookies));

        }
    }


    this.calcCookiesEachHour = function () {

        for (let i = 0; i < hours.length; i++) {
            this.CookiesEachHour.push(Math.floor(this.CustomersEachHour[i] * this.avgCookies));

            this.total += this.CookiesEachHour[i];
        }

    }
}

let Amman = new Cities('Amman', 2, 8, 4);
let Jerusalem = new Cities('Jerusalem', 4, 10, 6);



const cities = ['Amman', 'Jerusalem'];

let parent = document.getElementById('container');
let table = document.createElement('table');

parent.appendChild(table);

console.log(table);

// function table1 (){
let thead= document.createElement('tr');

table.appendChild(thead);



let nameFactor = document.createElement('th')
thead.appendChild(nameFactor);
nameFactor.textContent = 'name'
;
// let names = document.createElement('th');
// thead.appendChild(names);

for (let i = 0; i <= hours.length; i++) {

    let time = document.createElement('th');
    thead.appendChild(time);
    thead.textContent = [hours[i]];

    
}


Amman.getCustomersEachHour();
Amman.calcCookiesEachHour();

Jerusalem.getCustomersEachHour();
Jerusalem.calcCookiesEachHour();

console.log(cities);
console.log(hours);