import React from "react";
import ReactDOM from "react-dom/client";

// React Element: basically JS object

// React.createElement() => Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//   },
//   "Hello 🚀"
// );

// creates a JS object
// console.log(heading);
// console.log(typeof heading);

// JSX (javascript XML): it is like HTML syntax or XML like syntax

// What is transpiling a code mean?

// JSX (babel/SWC(rust) transpiles before it reaches JS engine): transpilation - Babel (now moved to rust compiler) (job is used for transpilation)

// const jsxPara = (
//   <p id="para" className="go">
//     From CSBS!
//   </p>
// );

// const jsxHeading = (
//   <h1 className="head" id="heading">
//     Arshad here!
//   </h1>
// );

// // React Component: Evtg in react is a component

// // 1) class based component - OLD (no one uses it now)
// // 2) function based component - NEW (latest one - use it 99% of the time)

// // React functional Component: just a normal JS function!
// // a function that reacts a piece of jsx code
// // a function that returns a react Element

// const fn = () => {
//   return true;
// }

// const fn1 = () => true;

// // shorthand syntax:
// // (stick to this syntax)
// // const HeadingComponent = () => {
// //     return <h1 className="heading">Namaste React Functional component</h1>;
// // };

// // this is also crct

// // jsx makes our life easier!
// const HeadingComponent2 = () => (
//   <div id="container">
//     <h1 className="heading">Another way of writing functional component</h1>
//   </div>
// );

// element

// const headingElement = (
//   <h1 id="understandElement">Hello there!</h1>
// );

// functional component: a function that returns an element

// const HeadingComponent = () => (
//       <div><h1>Hello there! 😂 functional component</h1></div>
// );

// console.log(jsxHeading); => obj, react element

// const Title = () => <h1>Title</h1>;

// const Heading = () => (
//   <div>
//     <Title />
//     <h1>Hello There</h1>
//   </div>
// );

// console.log(root);
// console.log(typeof(root));
// converts the react element to HTML element and pushed into the browser

// component composition: component inside another component

// const Title = () => <h1>Title</h1>;

// const Subtitle = () => <h2>This is a subtitle.</h2>;

// const Page = () => {
//   return (
//     <div>
//       <Title />
//       <Subtitle />
//     </div>
//   );
// };

// const Banner = () => {
//   return (
//       <h1>Banner</h1>
//   );
// }

// const Footer = () => {
//   return (
//       <h3>Footer</h3>
//   );
// }

// const Layout = () => {
//     return (
//         <div>
//           <Banner />
//           <Footer />
//         </div>
//     );
// }

const Component1 = () => {
  return <h1>Hi</h1>;
};

const element = (
  <div>
    <Component1 />
    <span>React Element</span>
  </div>
);

const Title = () => (
  <div>
    <h1>Main Title</h1>
  </div>
);
const Info = () => <p>This is some information</p>;

const Card = () => {
  return (
    <div>
      {/* Can write in this manner also */}
      {Title()}
      <Title></Title>
      <Title />
      {Info()}
      <Info />
      <Info></Info>
    </div>
  );
};

// element

const titleElement = <p>Hello, Arshad bhai!</p>;

const number = 1000; // imagine it is coming from api and its giving some malicious data

// CORS(cross origin resource sharing) side scripting
// jsx takes care of these injection attacks

const App = () => {
  return (
    <div>
      {/* sanitize the data first and then pass */}
      <h2>{number}</h2>
      {titleElement}
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Card />);
