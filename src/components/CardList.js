import React from 'react';
import Card from './Card.js';

// Learned in 211: Building a React App 2
// Version 2
// Shifted code from index.js to CardList.js

// const CardList = ({robots}) => {
//     return (
//         <div>
//             <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
//             <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
//             <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
//       </div>
//     )
// }

// Version 2.1
// Created a loop using .map

// const CardList = ({robots}) => {
//     const cardArray = robots.map((user,i) => {
//         return (
//             <Card
//                 key={robots[i].id}
//                 id={robots[i].id}
//                 name={robots[i].name}
//                 email={robots[i].email}
//             />)
//     })

//     return (
//         <div>
//             {cardArray}
//       </div>
//     )
// }

// Version 2.2
// Everything inside the curly brackets is JavaScript, so we can cut and paste and place the code inside the <div>

const CardList = ({robots}) => {
   return (
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
      </div>
    )
}


export default CardList;