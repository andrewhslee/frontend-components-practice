import React, { FC } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const NavBar: FC = () => {
    return (
        <nav className='nav'>
            <Link to='/' className="site-title">Home</Link>
            <ul>
                <CustomLink to='/about-me'>About Me</CustomLink>
                <CustomLink to='/about-me'>Contact me</CustomLink>
                <CustomLink to='/projects'>Projects</CustomLink>
            </ul>
        </nav>
    )
}

interface CustomLinkInterface {
    to: string;
    children?: string
}

function CustomLink({ to, children }: CustomLinkInterface) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to}>
          {children}
        </Link>
      </li>
    )
  }

export default NavBar;