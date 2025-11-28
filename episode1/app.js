// const heading = React.createElement("h1", {id: "heading1"}, "Hello World!");
// console.log(heading);
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(heading);

// const heading1 = React.createElement("h1", {}, "Heading 1");
// const heading2 = React.createElement("h2", {}, "Heading 2");
// const child1 = React.createElement("div", {id: "child1"}, [heading1, heading2]);
// const child2 = React.createElement("div", {id: "child2"}, [heading1, heading2]);
// const parent = React.createElement("div", {id: "parent"}, [child1, child2]);
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parent);

// arrow functions:

// const add = (a, b) => {
//         return a + b;
// }

// console.log(add(2, 3));

// const print = () => "Hello";

// console.log(print());

// Arrow functions do NOT have their own this

const obj = {
    name: "Arshad",
    show: () => {
        console.log(this); // window is printed 
    }
}

obj.show();

const obj1 = {
    name: "Arshad",
    show() {
        console.log(this); // obj1 gets printed 
    }
}

obj1.show();


