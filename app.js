'use strict'

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomCustomers(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

let cities = [];

function Cities(name, minCookies, maxCookies, avgCookies) {

    this.name = name;
    this.minCookies = minCookies;
    this.maxCookies = maxCookies;
    this.avgCookies = avgCookies;
    this.CustomersEachHour = [];
    this.CookiesEachHour = [];
    this.total = 0;
    cities.push(this);
}

Cities.prototype.getCustomersEachHour = function () {

    for (let i = 0; i < hours.length; i++) {
        this.CustomersEachHour.push(randomCustomers(this.minCookies, this.maxCookies));

    }
}

Cities.prototype.calcCookiesEachHour = function () {

    for (let i = 0; i < hours.length; i++) {
        this.CookiesEachHour.push(Math.floor(this.CustomersEachHour[i] * this.avgCookies));

        this.total += this.CookiesEachHour[i];
    }
}
let Amman = new Cities('Amman', 2, 8, 4);
let Jerusalem = new Cities('Jerusalem', 4, 10, 6);

console.log(cities);
console.log(hours);

let parent = document.getElementById('container');
let table1 = document.createElement('table');

parent.appendChild(table1);
console.log(table1);

function makeHeader() {
    let thead = document.createElement('tr');
    table1.appendChild(thead);
    let nameFactor = document.createElement('th')
    thead.appendChild(nameFactor);
    nameFactor.textContent = 'name';

    for (let i = 0; i < hours.length; i++) {

        let time = document.createElement('th');
        thead.appendChild(time);
        time.textContent = hours[i];
    }


    let total1 = document.createElement('th');
    thead.appendChild(total1);
    total1.textContent = 'total Daily';
}
makeHeader();


Cities.prototype.render = function () {

    let cityName = document.createElement('tr');
    table1.appendChild(cityName);

    let data = document.createElement('td');
    cityName.appendChild(data);
    data.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {

        let td = document.createElement('td');
        cityName.appendChild(td);
        td.textContent = this.CookiesEachHour[i];
    }
    let totalForEachShop = document.createElement('td');
    cityName.appendChild(totalForEachShop);
    totalForEachShop.textContent = this.total;
}

let makeFooter = function () {

    let footerRow = document.createElement('tr');
    table1.appendChild(footerRow);
    let footerTh = document.createElement('th');
    footerRow.appendChild(footerTh);
    footerTh.textContent = 'Totals'

    let megaTotal = 0;
    for (let i = 0; i < hours.length; i++) {

        let totalEachHour = 0;
        for (let j = 0; j < cities.length; j++) {

            totalEachHour += cities[j].CookiesEachHour[i];
            megaTotal += cities[j].CookiesEachHour[i];
        }
        footerTh = document.createElement('th');
        footerRow.appendChild(footerTh);
        footerTh.textContent = totalEachHour;
    }
    let final = document.createElement('th');
    footerRow.appendChild(final);
    final.textContent = megaTotal;
}
for (let i = 0; i < cities.length; i++) {
    cities[i].getCustomersEachHour();
    cities[i].calcCookiesEachHour();
    cities[i].render();
}
makeFooter();









