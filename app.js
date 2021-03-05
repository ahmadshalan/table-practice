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

// new table

let a = [1, 2, 3, 4, 5, 6, 7];
let b = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

let table2 = document.getElementById('table2');

let table3 = document.createElement('table');

table2.appendChild(table3);
console.log(table3);

let th = document.createElement('tr');
table3.appendChild(th);

for (let i = 0; i < a.length; i++) {

    let no = document.createElement('th')
    th.appendChild(no);
    no.textContent = a[i];
}

let num = document.createElement('tr');
table3.appendChild(num);

for (let j = 0; j < b.length; j++) {

    let m = document.createElement('td')
    num.appendChild(m);
    m.textContent = b[j];
};


// creating a construtor function 

let studentName = [];
function Students(name, height, weight) {

    this.name = name;
    this.height = height;
    this.weight = weight;
    studentName.push(this);
    this.render = function () {

        let tab = document.getElementById('StudensTable');
        let table4 = document.createElement('table');
        tab.appendChild(table4);
        console.log(table4);
        let head = document.createElement('tr');
        table4.appendChild(head);


        let aka;
        let m;
        for (m = 0; m <= studentName.length; m++){
            aka = document.createElement('td');
        head.appendChild(aka);

        if (m == 0) {
            aka.textContent = this.name;
        } else if (m == 1) {

            aka.textContent = this.weight;
        } else if (m >= 2) {

            aka.textContent = this.height;
        }
    }
}
}
        let ahmad = new Students('ahmad', 180, 100);
        let omar = new Students('Omar ', 150, 45);
        let ali = new Students ('Ali  ',200 , 120);
        
        console.log(studentName);
        for (let i = 0; i < studentName.length; i++) {
            studentName[i].render();
        };

let Form = document.getElementById('studentsForm');
Form.addEventListener('submit',submitter);

function submitter(event){
event.preventDefault();
console.log(event.target);

let name= event.target.name.value;
let height=parseInt(event.target.height.value);
let weight=parseInt(event.target.weight.value);
let newStudent= new Students (name,height,weight);

console.log(newStudent);
studentName.push(newStudent);



for (let i = 0; i < studentName.length; i++) {
    studentName[i].render();
};


}

