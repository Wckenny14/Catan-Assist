import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgCloseR } from 'react-icons/cg' 
import { useState } from 'react'
import './NavBar.css'

const Hamburger = () => {

const [open, setOpen] = useState(false);
const hamburgerIcon = <GiHamburgerMenu className='Hamburger' 
                        size='50px' color='rgb(237, 204, 85)' 
                        onClick={() => setOpen(!open)}
                        />
const closeIcon = <CgCloseR className='Hamburger' 
                        size='50px' color='rgb(237, 204, 85)' 
                        onClick={() => setOpen(!open)}
                        />

const closeMobileMenu = () => setOpen(false);                    
    return (
        <nav className='hamburger'>
        {open ? closeIcon : hamburgerIcon}   
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default Hamburger
