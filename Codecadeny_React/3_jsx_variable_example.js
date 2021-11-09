import React from 'react';
import ReactDOM from 'react-dom';

// Variable "myList"
const myList = (
  <ul>
    <li> Item 1 </li>
    <li> Item 2 </li>
    <li> Item 3 </li>
  </ul>
);

// Put "myList" into app
ReactDOM.render(myList, document.getElementById('app'));