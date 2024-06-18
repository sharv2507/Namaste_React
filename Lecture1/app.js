/*
* Whe are writing a program that used react to render things on the screen.
* Using this program we can write / create the whole DOM using JS.
*
*/

const heading = React.createElement("h1", {}, "Hello from the react Element!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);