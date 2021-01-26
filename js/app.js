'use strict'
var newCar = [];
function Car(category, model, year) {
    this.category = category;
    this.model = model;
    this.year = year;
    newCar.push(this);

    localStorage.setItem("Car", JSON.stringify(newCar));
}
console.log(Car);
var form = document.getElementById("addCar");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var category = event.target.carType.value;
    var model = event.target.carName.value;
    var year = event.target.carModal.value;
    var addCar = new Car(category, model, year);
});
console.log(newCar);


var getCat = document.getElementById("Car").innerHTML = localStorage.getItem("Car");
var getModel = document.getElementById("Car").innerHTML = localStorage.getItem("Car");
var getYear = document.getElementById("Car").innerHTML = localStorage.getItem("Car");


