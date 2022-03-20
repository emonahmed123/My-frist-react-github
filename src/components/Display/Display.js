import React from 'react';
import Dail from '../Dail/Dail';

const Display = (props) => {
    return (
        <div style={{border:'2px solid green',margin:'5px'}}>
            <h2>Name:{props.name}</h2>
            <h3>so far stpes today:{props.steps}</h3>
            <Dail steps={props.steps}></Dail>
        </div>
    );
};

export default Display;