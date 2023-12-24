import React from "react";
import ReactDOM from "react-dom/client";

// creating and rendering a single element using react
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello react!");

// console.log(heading); // React element object not HTML element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root); // ReactDOM root element

// root.render(heading);

/**
 * creating and rendering more complex HTML structure like:
 * <div id="parent">
 *      <div id="child1">
 *          <h1>h1 tag</h1>
 *          <h2>h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>h1 tag</h1>
 *          <h2>h2 tag</h2>
 *      </div>
 * </div>
 *
 *
 */
// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", {}, "h1 tag"),
//         React.createElement("h2", {}, "h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "h1 tag"),
//         React.createElement("h2", {}, "h2 tag"),
//     ]),
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello react!"
// );

// console.log(heading); // React element object not HTML element

// const root2 = ReactDOM.createRoot(document.getElementById("root2"));

// root2.render(heading);

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// React.createElement    ==>    ReactElement (JS Object)    ==>    HTMLElement (render)

// const heading = React.createElement("h1", { id: "heading" }, "Hello react!");
// console.log(heading);

// JSX    ==>    Babel transpiles to React.createElement    ==>    ReactElement (JS Object)    ==>    HTMLElement (render)

// JSX = HTML-like syntax
// this is not valid pure js, js engine and browsers ony understands ecmascript
// this code will give syntax error in pure javascript
// this code is transpiled by parcel(using babel) before it is handed over to the js engine
// if we are writing JSX in multiple lines then "()" are required, for one line of code "()" are optional
// const jsxHeading = (
//     <h1 id="heading" className="head">
//         Hello React using JSX!
//     </h1>
// );
// console.log(jsxHeading);

// React Functional Component
// it is a JS function whcih returns some piece of JSX code
function Title() {
    return (
        <h1 id="heading" className="head">
            Title Component!
        </h1>
    );
}

const headingElement = (
    <h1 id="heading" className="head">
        Heading Element
    </h1>
);

const HeadingComponent = () => {
    return (
        <div>
            {/* this is componenet composition - using a component inside another component */}
            {/* below 3 statements are same */}
            <Title />
            <Title></Title>
            {Title()}
            {headingElement}
            <h1>Hello React Functional Component!</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// render a react element
// root.render(jsxHeading);

// render a functional component
root.render(<HeadingComponent />);
