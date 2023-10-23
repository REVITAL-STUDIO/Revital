"use client"

import Logo from './Logo';
import './navbar.css';
import Menu from './menu/Menu';
import {
    useState
} from 'react';
const Navbar = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex flex-row items-center justify-between  bg-black h-[80px] fixed w-full z-50">
            <div className='ml-2'>
                <Logo />
            </div>
            <input type="checkbox" id="active" onChange={handleCheckboxChange} />
            <label htmlFor="active" className="menu-btn">{isChecked ? "Close" : "Menu"}</label>
            <Menu />
        </div>
    )
}

export default Navbar;