import React from 'react';

const Greeter = props => {
    return(
        <div>
            <h1>
                {props.phrase}, my name is {props.name}.
            </h1>
        </div>
    )
}

export default Greeter;