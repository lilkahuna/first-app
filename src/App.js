import './index.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Links from './Components/Links';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './Components/AboutMe';

//we can put all this into a class and not delcare variables by using const or var
//declaring function for onClick
//classes for the main app are better than just having a main function
class App extends Component {

  

  //use this when in a class to render things.
  render() {

    //We can add our own arguments to custom components 
    //returns a function call. Then we can pass after the function call.
    return (
      <>

        <Navbar />
        <Links />
        
        <Routes>
          <Route path='/'></Route>
          <Route path='/aboutme' element={<AboutMe />}></Route>
        </Routes>
        
      
        
      </>
    );
  }
}
export default App;



//testing stuff

/** 
state = {
  persons: [
    { name: 'Max', age: 28, hobby: 'Racing' },
    { name: 'Manuel', age: 41 }
  ]
}


//functions and variables in a class do not need a
//keyword to declare them



switchNameHandler = (newName) => {
  //setState merges states and will change specific ones but not others
  this.setState({
    persons: [
      { name: newName, age: 28, hobby: 'Basketball' },
      { name: 'Manuel', age: 100, hobby: 'Racing' }
    ]
  })

}
//event is retriving the user input 
onNameChange = (event) => {

  //changing the state of the paragraph.
  this.setState({
    persons: [
      { name: 'Max', age: 28, hobby: 'Racing' },
      { name: event.target.value, age: 41, hobby: '' }
    ]
  })
}


//use this when in a class to render things.
render() {

  //We can add our own arguments to custom components 
  //returns a function call. Then we can pass after the function call.
  return (

    <div className='main-div'>
      <h1>Test Website</h1>

      <button className='buttons' onClick={() => this.switchNameHandler('MAXXXX!')}>Switch Name</button>

      <Person click={this.switchNameHandler.bind(this, 'A guy')}
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}>Hobby: {this.state.persons[0].hobby}
      </Person>

      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age} changed={this.onNameChange}>Hobby: {this.state.persons[1].hobby}
      </Person>


      <Test />

    </div>

  );
}
**/