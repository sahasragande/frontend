// // // // import './App.css';
// // // // import React from 'react';
// // // // import Weather from './components/Weather';

// // // // function App() {
 
// // // //   return (
// // // //     <Weather/>
// // // //   );
// // // // }

// // // // export default App;


// // // import React from 'react';

// // // class LifecycleDemo extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     // Initialization: setting initial state
// // //     this.state = {
// // //       count: 0
// // //     };
// // //     console.log('1. Constructor: Initialized state');
// // //   }

// // //   // Mounting phase: get state from props (rarely needed)
// // //   static getDerivedStateFromProps(props, state) {
// // //     console.log('2. getDerivedStateFromProps: Sync props to state if needed');
// // //     return null; // return new state if necessary
// // //   }

// // //   componentDidMount() {
// // //     console.log('3. componentDidMount: Component mounted in DOM');
// // //   }

// // //   // Updating phase
// // //   shouldComponentUpdate(nextProps, nextState) {
// // //     console.log('4. shouldComponentUpdate: Decide whether to re-render');
// // //     return true;
// // //   }

// // //   getSnapshotBeforeUpdate(prevProps, prevState) {
// // //     console.log('5. getSnapshotBeforeUpdate: Before DOM updates');
// // //     return null;
// // //   }

// // //   componentDidUpdate(prevProps, prevState, snapshot) {
// // //     console.log('6. componentDidUpdate: After DOM updates');
// // //   }

// // //   increment = () => {
// // //     this.setState({ count: this.state.count + 1 });
// // //   };

// // //   render() {
// // //     console.log('Render: Rendering UI');
// // //     return (
// // //       <div style={{ padding: '20px', fontFamily: 'Arial' }}>
// // //         <h2>React Lifecycle Demo</h2>
// // //         <p>Count: {this.state.count}</p>
// // //         <button onClick={this.increment}>Increment</button>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default LifecycleDemo;




// // // import React from 'react';

// // // // Child Component
// // // class LifecycleDemo extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       count: 0
// // //     };
// // //     console.log('1. Constructor: Initialized state');
// // //   }

// // //   static getDerivedStateFromProps(props, state) {
// // //     console.log('2. getDerivedStateFromProps: Sync props to state if needed');
// // //     return null;
// // //   }

// // //   componentDidMount() {
// // //     console.log('3. componentDidMount: Component mounted in DOM');
// // //   }

// // //   shouldComponentUpdate(nextProps, nextState) {
// // //     console.log('4. shouldComponentUpdate: Decide whether to re-render');
// // //     return true;
// // //   }

// // //   getSnapshotBeforeUpdate(prevProps, prevState) {
// // //     console.log('5. getSnapshotBeforeUpdate: Before DOM updates');
// // //     return null;
// // //   }

// // //   componentDidUpdate(prevProps, prevState, snapshot) {
// // //     console.log('6. componentDidUpdate: After DOM updates');
// // //   }

// // //   componentWillUnmount() {
// // //     console.log('7. componentWillUnmount: Cleanup before component is removed');
// // //   }

// // //   increment = () => {
// // //     this.setState({ count: this.state.count + 1 });
// // //   };

// // //   render() {
// // //     console.log('Render: Rendering UI');
// // //     return (
// // //       <div style={{ padding: '20px', fontFamily: 'Arial' }}>
// // //         <h2>Lifecycle Demo</h2>
// // //         <p>Count: {this.state.count}</p>
// // //         <button onClick={this.increment}>Increment</button>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // // Parent Component to handle Mounting/Unmounting
// // // class ParentComponent extends React.Component {
// // //   state = {
// // //     showChild: true
// // //   };

// // //   toggleChild = () => {
// // //     this.setState((prevState) => ({
// // //       showChild: !prevState.showChild
// // //     }));
// // //   };

// // //   render() {
// // //     return (
// // //       <div style={{ padding: '20px', fontFamily: 'Arial' }}>
// // //         <button onClick={this.toggleChild}>
// // //           {this.state.showChild ? 'Unmount Child' : 'Mount Child'}
// // //         </button>
// // //         <hr />
// // //         {this.state.showChild && <LifecycleDemo />}
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default ParentComponent;

// // // import React from 'react';

// // // class Counter extends React.Component {
// // //   // Initialization
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       count: 0
// // //     };
// // //     console.log('Initialization: Constructor called');
// // //   }

// // //   // Mounting
// // //   componentDidMount() {
// // //     console.log('Mounting: componentDidMount called');
// // //   }

// // //   // Updating
// // //   componentDidUpdate(prevProps, prevState) {
// // //     if (prevState.count !== this.state.count) {
// // //       console.log(`Updating: componentDidUpdate - Count changed from ${prevState.count} to ${this.state.count}`);
// // //     }
// // //   }

// // //   // Unmounting
// // //   componentWillUnmount() {
// // //     console.log('Unmounting: componentWillUnmount called');
// // //   }

// // //   // Handler to increment count
// // //   handleIncrement = () => {
// // //     this.setState((prevState) => ({
// // //       count: prevState.count + 1
// // //     }));
// // //   };

// // //   // Handler to decrement count
// // //   handleDecrement = () => {
// // //     this.setState((prevState) => ({
// // //       count: prevState.count - 1
// // //     }));
// // //   };

// // //   render() {
// // //     return (
// // //       <div style={{ textAlign: 'center', padding: '20px' }}>
// // //         <h2>React Lifecycle Counter</h2>
// // //         <p>Count: {this.state.count}</p>
// // //         <button onClick={this.handleIncrement} style={{ marginRight: '10px' }}>Increment</button>
// // //         <button onClick={this.handleDecrement}>Decrement</button>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default Counter;
// // // This gets the full query string from the URL
// // const queryParams = new URLSearchParams(window.location.search);

// // // Access specific parameters
// // const name = queryParams.get('name');
// // const age = queryParams.get('age');

// // console.log("Name:", name);  // Output: Sahasra
// // console.log("Age:", age);    // Output: 22
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AboutUs from './AboutUs';
// import Contact from './Contact';

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/about">About Us</Link> | 
//         <Link to="/contact/123?source=homepage">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact/:userId" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

