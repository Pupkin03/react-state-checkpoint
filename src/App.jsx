// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Component } from 'react';
import './App.css'

// function App() {


//   return (
//     <>
//       <div>

//       </div>
      
//     </>
//   )
// }

// export default App



class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Pupkin Ayo ",
        bio: "Full stack javascript developer",
        imgSrc: "https://th.bing.com/th?q=Anger+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247", // Replace with actual image URL
        profession: "Programmer",
      },
      shows: false, // Initial state for profile visibility
    };
    this.toggleProfile = this.toggleProfile.bind(this); // Binding the method to the component
  }

  componentDidMount() {
    // Update the interval ID in the state
    this.intervalId = setInterval(() => {
      const now = Date.now();
      const mountTime = this.mountTime; // Assuming mountTime is set during render
      const elapsedTime = Math.floor((now - mountTime) / 1000); // Time in seconds
      console.log(`Component mounted for ${elapsedTime} seconds`);
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    // Clear the interval when component unmounts
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows } = this.state;
    this.mountTime = this.mountTime || Date.now();
  return (
    <>
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div className="profile-card">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.profession}</p>
            <p>{person.bio}</p>
          </div>
        )}
      </div>
       
    </>
  );
}


}
export default App
