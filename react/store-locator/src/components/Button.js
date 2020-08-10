import React from 'react';
import './Button.css';

function Button(props) {
    const location = props.location ? props.location : 'All Locations';

    return (
        <button value={props.location} onClick={props.handleClick} className="location-button">{location}</button>
    );
}

export default Button;
