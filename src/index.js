import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card'; // Only used in Version 1
// import CardList from './CardList'; // Only used in Version 2
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robots } from './robots'; // Only used in Version 2

// Learned in 209: Building A React App 1
// Version 1
// Manually define id, name and email for each card
// Pass these parameters over to Card.js

// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//       <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//       <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//       <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Learned in 211: Building a React App 2
// Version 2
// Added a Card List
// Shifted all this code above to CardList.js

// ReactDOM.render(
//   <React.StrictMode>
//     <CardList robots={robots} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Learned in 212: Building a React App 3

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
