import React from 'react';
import { Link } from '@reach/router'
import '../styles/Nav.css'

const Nav = ({topics}) => {
    console.log(topics)
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link>
            {topics.map(topic => {
                return (
                    <Link to={`/${topic.slug}`} key={topic.slug}>{topic.slug}</Link>
                )
            })}
        </nav>
    );
};

export default Nav;