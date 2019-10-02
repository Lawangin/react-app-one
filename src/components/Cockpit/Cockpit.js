import React, { useEffect } from 'react';
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP requests...
        setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if(props.persons.length <= 2) {
        assignedClasses.push(classes.red); // at this point classes will be red
    }
    if(props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // at this point classes are red and bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I'm a React App!</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Name
            </button>
        </div>
    );
};

export default Cockpit;