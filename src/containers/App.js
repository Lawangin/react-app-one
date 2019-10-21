import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxillary';
import AuthContext from '../context/auth-context';


class App extends Component {
  state = {
    persons: [
      { id: 'sdgad', name: 'Lawangin', age: 30 },
      { id: 'kdlfn', name: 'Khan', age: 25 },
      { id: 'aifje', name: 'Samsoor', age: 21}
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

    this.setState((prevState, props) => {
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

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
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: false })}}>Remove Cockpit</button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
        {this.state.showCockpit ? (
            <Cockpit
            showPerson={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
            />
        ) : null}

        {persons}
        </AuthContext.Provider>
       
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
