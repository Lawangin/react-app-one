import React, { useEffect, useRef, useContext } from 'react';

import classes from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP requests...
        // setTimeout(() => {
        //     alert('Saved data to cloud!')
        // }, 1000);
        toggleButtonRef.current.click();
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

    if(props.personsLength <= 2) {
        assignedClasses.push(classes.red); // at this point classes will be red
    }
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold); // at this point classes are red and bold
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I'm a React App!</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle People
            </button>
            <button onClick={authContext.login}>Login</button>
            
        </div>
    );
};

export default React.memo(Cockpit);