import React from 'react';
import ReactDOM from 'react-dom';

// Get the root in a variable
const rootElement = document.getElementById('root');

// Example of a custom react component
function MainContent() {
  return (
    <div>
      <p>What dose this mean?</p>
      <ul>
        <li>I can use JavaScript to add HTML to my page.</li>
        <li>I don't have to write HTML manually. Kind of.</li>
      </ul>
    </div>
  );
}

// Nav Bar Example
function NavBar() {
  return (
    <nav>
      <h1 className="logo nav__logo">Logo</h1>
      <ul className="nav__links">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// Writing to the DOM with React
ReactDOM.render(
  <div>
    <NavBar />
  </div>,
  rootElement
);

// // This was a challenge to write to the dom using vanilla JS.
// // Specifically said to not use innerHTML().
// const root = document.getElementById('root');
// const headline = document.createElement('h1');
// headline.innerText = 'This is using vanilla JS';
// headline.classList.add('header');
// root.appendChild(headline);

/* 
    You can also save elements as variables.
    const page = (
        <div>
            <h1 className="header">This is JSX</h1>
            <p>This is a paragraph>
        </div>
    )

    You can then render it like:
    ReactDOM.render(page, document.getElementById("root"));
*/
