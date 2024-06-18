import { Ford } from "./classes/Ford";
import { Volvo } from "./classes/Volvo";
import { HasFormatter } from "./Hasformat";

const button = document.querySelector("button")
const list = document.querySelector("ul");
const color = document.querySelector("#color") as HTMLInputElement;
const price = document.querySelector("#price") as HTMLInputElement;
const country = document.querySelector("#origin") as HTMLInputElement;
const select = document.querySelector("select")!

let first: HasFormatter;
let second: HasFormatter;

first = new Volvo ("Volvo", "USA", "Red", 500);
second = new  Ford ("Ford", 'UAE', 'Red' ,500);

button?.addEventListener("click", (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;

    if (select.value.toLowerCase() == "volvo") {
        doc = new Volvo(select.value, color.value, country.value, price.valueAsNumber)
    } else {
        doc = new Ford(
          select.value,
          color.value,
          country.value,
          price.valueAsNumber
        );

    }

    const li = document.createElement("li")
    const h3 = document.createElement("h3")
    const h5 = document.createElement("h5");

    h3.innerHTML = select.value   
    // h5.innerHTML = `${color.value} colored car costs ${price.value}$ and made in ${country.value}`;
    h5.innerHTML = first.format()
    li.appendChild(h5);
    li.prepend(h3)
    list?.append(li)
    console.log(list);
    
 })

console.log(button, list, color);
