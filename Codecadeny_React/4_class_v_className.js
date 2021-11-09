import React from 'react';
import ReactDOM from 'react-dom';

// Using "className" attribute instead of "class"
const myDiv = <div className = "big">I AM A BIG DIV</div>

ReactDOM.render(myDiv, document.getElementById('app'));