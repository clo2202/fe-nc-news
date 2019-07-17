import React from 'react';

const Errors = (props) => {
    const message = props.location.state
    return (
        <div>
            404: {message.displayErr}
        </div>
    );
};

export default Errors;