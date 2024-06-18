"use strict";
// let titles = "hello world"; // let title: string = "hello world"
// let bigs = undefined; // let big: undefined = undefined
// let ness = null; // let nes: null = null
// let integers = 571; // let integer: number = 571
// let symbols = Symbol(); // let symbol: symbol = Symbol()
// let bools = true; // let bool: boolean = true
// let bigIntegers = 571n; // let bigInteger: bigint  = 571n
// console.log(title, big, nes, integer, symbol, bool, bigInteger, obj, obj.age);
// =====================Object=============
// let obj = { age: 571 };
var objs = { age: 571 };
objs = { age: 632 };
console.log(objs.age);
// ================Aray=================
var arrays = [1, 2, "5"];
// let arr: string[] = ["1", "2"]
console.log(arrays);
console.log(arrays[1]);
// =============Function==================
function FuncTypses(name) {
    return name;
}
var finallyresults = FuncTypses("John");
console.log(finallyresults.toUpperCase());
var language = "uzbek";
var variants = [
    { id: 1, value: "english" },
    { id: 2, value: "uzbek" },
    { id: 3, value: "russian" },
];
variants.map(function (lang) {
    // language = lang.value
    // console.log(language);
    //   language === lang.value;
    //   console.log(language, lang.value);
});
var value = [
    { id: 1, name: "Man" },
    { id: 2, name: "San" },
    { id: 3, name: "U" },
    { id: 4, name: "Kim" },
];
