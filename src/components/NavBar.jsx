import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "../assets/icons/menu-wider.png";
import Close from "../assets/icons/x.png";

const NavBar = () => {

    const [visible, setVisible] = useState(false)
    
    return (
        <>
            <header className='sticky flex justify-between items-center bg-white top-0 p-2 border-b'>
                <Link to='/'><p className='text-3xl text-orange-500'>RecipesClub</p></Link>
                <ul className='hidden sm:flex gap-5 text-sm'>
                    <NavLink to='/'><p>Home</p></NavLink>
                    <NavLink to='/About'><p>About</p></NavLink>
                    <NavLink to='/Contact'><p>Contact</p></NavLink>
                </ul>
                <img className='sm:hidden cursor-pointer' onClick={() => setVisible(true)} src={Menu} alt='Menu'/>
            </header>
            <aside className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className='cursor-pointer flex flex-col text-gray-600'>
                        <img className='w-8 ' src={Close} alt="close" />
                    </div>
                    <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/'> home</NavLink>
                    <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/about'> About</NavLink>
                    <NavLink onClick={() => setVisible(flase)} className='py-2 pl-6 border' to='/contact'> Contact</NavLink>
                </div>
            </aside>
        </>
    )
}

export default NavBar;
