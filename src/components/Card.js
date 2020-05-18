import React from 'react';

// Learned in 209: Building A React App 1
// Version 1
// Add props in, so that Card knows that it needs to accept these parameters
// Add the $ when using javascript expressions
// Surround it with backticks `` and curly brackets as it's a javascript expression {}

// const Card = (props) => {
//     return (
//         <div className='bg-light-green dib br3 br3 pa3 ma2 grow bw2 shadow-5 tc'>
//             <img src ={`https://robohash.org/${props.id}`} alt='robots' />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
//     }

// Version 1.1
// Destructure the incoming props (properties) to simplify the props expression

// const Card = (props) => {
//     const {id, name, email} = props; // Destructuring - Makes code neater
//     return (
//         <div className='bg-light-green dib br3 br3 pa3 ma2 grow bw2 shadow-5 tc'>
//             <img src ={`https://robohash.org/${id}`} alt='robots' />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
//     }

// Version 1.2
// Destructure even further

const Card = ({id, name, email}) => { // Destructuring here
    return (
        <div className='bg-light-green dib br3 br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src ={`https://robohash.org/${id}`} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
    }



export default Card;