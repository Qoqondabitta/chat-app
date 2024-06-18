"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ford_1 = require("./classes/Ford");
var Volvo_1 = require("./classes/Volvo");
var button = document.querySelector("button");
var list = document.querySelector("ul");
var color = document.querySelector("#color");
var price = document.querySelector("#price");
var country = document.querySelector("#origin");
var select = document.querySelector("select");
var first;
var second;
first = new Volvo_1.Volvo("Volvo", "USA", "Red", 500);
second = new Ford_1.Ford("Ford", 'UAE', 'Red', 500);
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) {
    e.preventDefault();
    var doc;
    if (select.value.toLowerCase() == "volvo") {
        doc = new Volvo_1.Volvo(select.value, color.value, country.value, price.valueAsNumber);
    }
    else {
        doc = new Ford_1.Ford(select.value, color.value, country.value, price.valueAsNumber);
    }
    var li = document.createElement("li");
    var h3 = document.createElement("h3");
    var h5 = document.createElement("h5");
    h3.innerHTML = select.value;
    // h5.innerHTML = `${color.value} colored car costs ${price.value}$ and made in ${country.value}`;
    h5.innerHTML = first.format();
    li.appendChild(h5);
    li.prepend(h3);
    list === null || list === void 0 ? void 0 : list.append(li);
    console.log(list);
});
console.log(button, list, color);
