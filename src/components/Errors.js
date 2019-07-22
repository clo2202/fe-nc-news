import React from "react";
import {Link} from '@reach/router'
import '../styles/Errors.css'

const Errors = props => {
  const message = props.location.state;
  return (
    <div className='error'>
      <h2>Oops!</h2>
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
