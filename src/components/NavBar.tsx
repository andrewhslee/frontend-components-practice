import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NavBar: FC = () => {
    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <ul>
                <Link to='/about-me'>About Me</Link>
                <Link to='/about-me'>Contact me</Link>
                <Link to='/projects'>Projects</Link>
            </ul>
        </div>
    )
}

export default NavBar;