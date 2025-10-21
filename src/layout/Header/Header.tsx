import { useState } from 'react';
import burger from '../../assets/burger.svg';
import me from '../../assets/me1.jpg';
import burgerOpen from '../../assets/openburg.gif';
import './Header.css';

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const toggle = () => {
        setOpenMenu(prev => !prev)
    }


    return (
        <>
            <div id='header-section' className='h-[33vh] h-[112px] '></div>
            <header className='my-container  fixed justify-center lg:justify-between bg-neutral-50 flex flex-col lg:flex-row justify-between px-0  py-0  top-0 left-0 z-[9999]'>

                <div className='flex ' >
                    <div className='w-1/2 m-2  flex items-center p-2 gap-2 '>
                        <img src={me} alt="Myfoto" className=' rounded-full w-20 h-20 object-cover ' />
                        <span className='w-full text-adapt  font-medium text-red-900'>Alexander Murakin</span>
                    </div>
                    <div className='w-1/2 p-2 flex items-center justify-end lg:hidden'>
                        <img src={openMenu ? burgerOpen : burger} onClick={toggle} className='lg:hidden ' alt="Menu" />
                    </div>


                </div>
                <nav className={` bg-neutral-50 border-t-2 border-blue-400 lg:border-none p-2 flex w-full justify-evenly  
                absolute  lg:static top-[100%] left-0  ${openMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                 transition-all duration-300  font-medium text-blue-400 text-adapt 
                  lg:w-[45%] lg:items-center lg:opacity-100 lg:translate-x-0`} >
                    <a href="#header-section" className='adapt-touch text-adapt'>Home</a>
                    <a href="#about" className='adapt-touch text-adapt'>About</a>
                    <a href="#projects" className='adapt-touch text-adapt'>Projects</a>
                    <a href="#contacts" className='adapt-touch text-adapt transition-all ease-in-out '>Contacts</a>
                </nav>


            </header>
        </>
    )
}