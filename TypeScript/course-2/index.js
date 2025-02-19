"use strict";
const a = 1;
// console.log(a);
const arr = [1, 2, ["ff"]];
const tuple = [1, "ff"];
const cord = [
    [1, 2],
    [3, 4],
];
// console.log(tuple[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// console.log(Color.Red);
const x = 1;
if (typeof x === "number") {
    //   console.log(x);
}
const y = x[0];
const chin = [
    { name: "chin", age: 20 },
    { name: "chin2", age: 21 },
];
const res = chin.pop();
console.log(chin, res);
function makeName(firstName, lastName, middleName) {
    if (middleName) {
        return firstName + " " + middleName + " " + lastName;
    }
    return firstName + " " + lastName;
}
console.log(makeName("mosh", "shemesh"));
function aplayFunc(funcs, values) {
    const rerults = [];
    return rerults;
}
function testOverload(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.toString() + b.toString();
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return 0;
}
console.log(testOverload("a", 1));
