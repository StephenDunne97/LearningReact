import React from 'react';
import ReactDOM from 'react-dom';

// Treated as JSX. Output: "2 + 3".
ReactDOM.render(<h1>2 + 3</h1>, document.getElementById('app'));

// Treated as JS since {} are used. Output: "5".
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById('app'));

// A mix of JSX and JS in one variable.
const math = (
    <h1>2 + 3 = {2 + 3}</h1>
);
  
ReactDOM.render(math, document.getElementById('app'));

// Accessing a variable in ReactDOM.render()
const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

// Using a variable as an attribute in JSX
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

const gooseImg = (
  <img src = {goose} />
);

ReactDOM.render(gooseImg, document.getElementById('app'));
