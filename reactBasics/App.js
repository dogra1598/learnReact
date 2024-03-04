/*
	Plain JavaScript Way
	====================

	const heading = document.createElement('h1');
	heading.innerHTML = "Hello World!";

	const root = document.getElementById('root');
	root.appendChild(heading);
*/

// --------------------------------------------------------------------------------------------------------------------------------------

// Using React
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

// --------------------------------------------------------------------------------------------------------------------------------------

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
