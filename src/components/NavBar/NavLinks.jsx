import { NavLink } from 'react-router-dom';
import React from "react";

const NavLinks = (props) => {
    return (
        <div className='NavLinks'>
            <ul className='openMenu'>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink className='openLinks' to="/mapGenerator">Map Generator</NavLink>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink className='openLinks' to="/standardScore">Score tracker</NavLink>
                </li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <NavLink className='openLinks' to="/customScore">Custom Score Tracker</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks

