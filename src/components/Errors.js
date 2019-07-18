import React from "react";
import {Link} from '@reach/router'

const Errors = props => {
  const message = props.location.state;
  return (
    <div>
      <p>Oops</p>
      {props.location && props.location.state ? (
        <p>{message.displayErr}</p>
      ) : (
        <p>Sorry, page not found</p>
      )}
    <Link to='/'><button>Return Home</button></Link>
    </div>
  );
};

export default Errors;
