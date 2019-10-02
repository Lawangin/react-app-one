import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
      { id: 'sdgad', name: 'Lawangin', age: 30 },
      { id: 'kdlfn', name: 'Khan', age: 25 },
      { id: 'aifje', name: 'Samsoor', age: 21}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  };


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // alternative to above modern version
    // const person = Object.assign({}, this.state.persons[personIndex])//

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); same as the modern version below
    const persons = [...this.state.persons];
    //removes person from array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    //flips between true and false
    this.setState({showPersons: !doesShow})
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
           <Persons
               persons={this.state.persons}
               clicked={this.deletePersonHandler}
               changed={this.nameChangedHandler}
           />
      );

    }



    return (
      <div className={classes.App}>
        <button onClick={() => { this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        {this.state.showCockpit ? (
            <Cockpit
            showPerson={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />
        ) : null}

        {persons}
      </div>
    );
  }
}

export default App;
