import React, { Component } from 'react';
import Person from "./Person/Person";


class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (
            nextProps.persons !== this.props.persons || 
            nextProps.changed !== this.props.changed || 
            nextProps.clicked !== this.props.clicked 
        ) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });   
    }
}

export default Persons;