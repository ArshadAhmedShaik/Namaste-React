import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hi! I'm Arshad!");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);

// arrow functions:

// const add = (a, b) => {
//         return a + b;
// }

// console.log(add(2, 3));

// const print = () => "Hello";

// console.log(print());

// Arrow functions do NOT have their own this

// const obj = {
//     name: "Arshad",
//     show: () => {
//         console.log(this); // window is printed 
//     }
// }

// obj.show();

// const obj1 = {
//     name: "Arshad",
//     show() {
//         console.log(this); // obj1 gets printed 
//     }
// }

// obj1.show();


