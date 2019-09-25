import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Lawangin', age: 30 },
      { name: 'Khan', age: 25 },
      { name: 'Samsoor', age: 21}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Lou';
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Khan', age: 40 },
        { name: 'Samsoor', age: 21}
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Law', age: 30 },
        { name: event.target.value, age: 25 },
        { name: 'Samsoor', age: 40 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <button
            style={style}
            onClick={() => this.switchNameHandler('Zmarak!')}>Switch Name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Lou!')}
            changed={this.nameChangedHandler}>My Hobbies: Drawing</Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
