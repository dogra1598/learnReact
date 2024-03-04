/*
	Plain JavaScript Way
	====================

	const heading = document.createElement('h1');
	heading.innerHTML = "Hello World!";

	const root = document.getElementById('root');
	root.appendChild(heading);
*/

// --------------------------------------------------------------------------------------------------------------------------------------

// Using react with cdn
/*
	element creation is handled by react
	rendering of elements created by react is handled by reactDOM

	react.createElement takes 3 parametes or props(properties):
		1. the element we eant to create
		2. attributes associated with that element
		3. content of that element (children)
*/

/*
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World");
console.log(heading); // react element (just an object, not HTML element)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // this render method is responsible for converting the react element into HTML element and render it on the screen
*/

/*
const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", { id: "heading" }, "Hello World"),
		React.createElement("h2", { id: "heading2" }, "I'm a h2 tag"),
	])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// --------------------------------------------------------------------------------------------------------------------------------------

// Using react as package module
import React from "react";
import ReactDOM from "react-dom/client";

// creating react element using JSX
// JSX is XML-like sytax
// JSX code is transpiled before it reaches JS engine
// Babel(Js transpiler) is doing the transpiling job, and Babel is used by parcel
// JSX	=>	transpiled to React.creatElement
// to write JSX in multiple lines we need to wrap it with ()
const heading = <h1 className="heading">Hello World, using JSX</h1>;

/*
	React Functional Components
	===========================
	Just a normal Js function which return some JSX.

	**Note: React functional components name shoulf start with capital(it is a way for react to understand component)

	Component composition: Combining components together to create larger components.
*/
// It is not compulsory to use arrow functions to create react functional components(but it is recommended)
const Title = () => <h1>Title Component</h1>;

const HeadingComponent = () => {
	return (
		<div className="container">
			<h1 className="heading">Heading Component</h1>
			{/* below 3 statements are same */}
			<Title />
			<Title></Title>
			{Title()}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
