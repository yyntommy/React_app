import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steph', age: 26 }
    ],
    otherState: 'something else'
  }

  switchNameHandler = (NewName) => {
    this.setState ({
      persons:[
        { name: NewName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Steph', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons:[
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Steph', age: 27 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >Hobbies</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />

      </div>
    );
  }
}

export default App;
