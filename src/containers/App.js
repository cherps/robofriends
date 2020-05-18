// import React from 'react'; // Use this if we're writing 'React.Component' in full below
import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import { robots } from './robots'; // Only needed in Version 3. In Version 4, we're requesting this info from RESTful API elsewhere
import './App.css';

// Learned in 212: Building a React App 3

// Version 3
// Added a searchbox, but it doesn't do anything at the moment

// const App = () => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots} />
//         </div>
//     )
// }

// Version 3.1
// Searchbox sends its input to App, which generates filteredRobots
// But it doesn't get passed down to CardList

// class App extends React.Compoent {
// Long-version. To use the shorthand below, import { Component } from React

// class App extends Component { // Add when making reactive components
//     constructor() { // Add when making reactive components
//         super();    // Add when making reactive components
//         this.state = {
//             database: robots,
//             searchfield: ''
//         }
//     }

//     onSearchChange = (event) => {

//         // Use the setState() method to assign event.target.value to searchfield
//         this.setState({ searchfield: event.target.value }); 

//         // With searchfield changing everytime there's a new input, the filter works
//         const filteredRobots = this.state.database.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         })
//         console.log(filteredRobots);
//         // console.log(event.target.value);
//     }

//     render () {
//         return (
//             <div className='tc'>
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchchange={this.onSearchChange} />
//                 <CardList robots={this.state.database} />
//             </div>
//         )
//     }
// }

// Version 3.2

// class App extends React.Compoent {
// Long-version. To use the shorthand below, import { Component } from React

// class App extends Component { // Add when making reactive components
//     constructor() { // Add when making reactive components
//         super();    // Add when making reactive components
//         this.state = {
//             database: robots,
//             searchfield: ''
//         }
//     }

//     onSearchChange = (event) => {
//         // Use the setState() method to assign event.target.value to searchfield
//         this.setState({ searchfield: event.target.value }); 
//     }

//     render() {
//         const filteredRobots = this.state.database.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         })
//         console.log(filteredRobots);
//         return (
//             <div className='tc'>
//                 <h1 className='f1'>RoboFriends</h1>
//                 <SearchBox searchchange={this.onSearchChange} />
//                 <CardList robots={filteredRobots} />
//             </div>
//         )
//     }
// }

// Learned in 212: Building a React App 4
// Version 4

// class App extends Component { // Add when making reactive components
//     constructor() { // Add when making reactive components
//         super();    // Add when making reactive components
//         this.state = {
//             database: [],
//             searchfield: ''
//         }
//         console.log('constructor');
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users') // Fetching the user data from a server elsewhere
//             .then(response => response.json())
//             .then(users => {
//                 this.setState({database: users});
//             });
//         console.log('componentDidMount');
//     }

//     //

//     onSearchChange = (event) => {
//         // Use the setState() method to assign event.target.value to searchfield
//         this.setState({ searchfield: event.target.value }); 
//     }
 
//     render() {
//         const filteredRobots = this.state.database.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         })
//         console.log('render');
//         if (this.state.database.length === 0) {
//             return <h1>Loading</h1>
//         } else {
//             return (
//                 <div className='tc'>
//                     <h1 className='f1'>RoboFriends</h1>
//                     <SearchBox searchchange={this.onSearchChange} />
//                     <CardList robots={filteredRobots} />
//                 </div>
//             )
//        }
//     }
// }

// Learned in 215: Building a React App 5
// Version 5
// Added <Scroll>

// class App extends Component { // Add when making reactive components
//     constructor() { // Add when making reactive components
//         super();    // Add when making reactive components
//         this.state = {
//             database: [],
//             searchfield: ''
//         }
//         console.log('constructor');
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users') // Fetching the user data from a server elsewhere
//             .then(response => response.json())
//             .then(users => {
//                 this.setState({database: users});
//             });
//         console.log('componentDidMount');
//     }

//     //

//     onSearchChange = (event) => {
//         // Use the setState() method to assign event.target.value to searchfield
//         this.setState({ searchfield: event.target.value }); 
//     }
 
//     render() {
//         const filteredRobots = this.state.database.filter(robot => {
//             return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//         })
//         console.log('render');
//         if (this.state.database.length === 0) {
//             return <h1>Loading</h1>
//         } else {
//             return (
//                 <div className='tc'>
//                     <h1 className='f1'>RoboFriends</h1>
//                     <SearchBox searchchange={this.onSearchChange} />
//                     <Scroll>
//                         <CardList robots={filteredRobots} />
//                     </Scroll>
//                 </div>
//             )
//        }
//     }
// }

// Version 6
// Destructured to make the code cleaner

class App extends Component { // Add when making reactive components
    constructor() { // Add when making reactive components
        super();    // Add when making reactive components
        this.state = {
            database: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // Fetching the user data from a server elsewhere
            .then(response => response.json())
            .then(users => {
                this.setState({database: users});
            });
        console.log('componentDidMount');
    }

    //

    onSearchChange = (event) => {
        // Use the setState() method to assign event.target.value to searchfield
        this.setState({ searchfield: event.target.value }); 
    }
 
    render() {
        const {searchfield, database} = this.state;
        const filteredRobots = database.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log('render');
        return !database.length ? // Shorter, better way to write database.length === 0
        <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchchange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
       }
    }




export default App;
