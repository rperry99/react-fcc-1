// // Writing to the DOM with React
// ReactDOM.render(
//   <div>
//     <h1>This is coming from Index.js.</h1>
//     <MainContent />
//   </div>,
//   document.getElementById('root')
// );

// // Example of a custom react component
// function MainContent() {
//   return (
//     <div>
//       <p>What dose this mean?</p>
//       <ul>
//         <li>I can use JavaScript to add HTML to my page.</li>
//         <li>I don't have to write HTML manually. Kind of.</li>
//       </ul>
//     </div>
//   );
// }

// This was a challenge to write to the dom using vanilla JS.
// Specifically said to not use innerHTML().
const root = document.getElementById('root');
const headline = document.createElement('h1');
headline.innerText = 'This is using vanilla JS';
headline.classList.add('header');
root.appendChild(headline);
