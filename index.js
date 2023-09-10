// Writing to the DOM with React
ReactDOM.render(
  <div>
    <h1>This is coming from Index.js.</h1>
    <MainContent />
  </div>,
  document.getElementById('root')
);

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
