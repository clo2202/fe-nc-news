import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/topic1'>Topic 1</Link>
            <Link to='/topic2'>Topic 2</Link>
        </nav>
    );
};

export default Nav;