import React from 'react';

// Version 5
 
const Scroll = (props) => {
    return (
        // This style creates a scrolling section for CardList, so that the SearchBox is always visible
        // We're able to add styles using JSX by writing it as a JavaScript expression
        // - Curly brackets (as it's a JavaScript expression)
        // - camelCase, e.g. overflowY
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;