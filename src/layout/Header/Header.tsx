import { useState } from 'react';
import me from '../../assets/me.png';
import './Header.css';
import burger from '../../assets/burger.svg'
import burgeropen from '../../assets/openburg.gif'

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const toggle = () => {
        setOpenMenu(prev => !prev)
    }
    return (
        <>
            <div className='h-[20vh] '></div>
            <header className='container fixed justify-center lg:justify-between   bg-neutral-50 flex flex-col lg:flex-row justify-between px-0 h-[20vh] py-0  top-0 left-0'>

                <div className='flex    ' >
                    <div className='w-1/2 flex items-center p-2 gap-2 '>
                        <img src={me} alt="Myfoto" className=' rounded-full w-20 h-20 object-cover ' />
                        <span className='w-full text-adapt  font-medium text-red-900'>Alexander Murakin</span>
                    </div>
                    <div className='w-1/2 p-2 flex items-center justify-end lg:hidden'>
                        <img src={openMenu ? burgeropen : burger} onClick={toggle} className='lg:hidden ' alt="Menu" />
                    </div>


                </div>
                <nav className={` bg-neutral-50 flex w-full justify-evenly  
                absolute lg:static top-[100%] ${openMenu ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                 transition-all duration-300  font-medium text-blue-400 text-adapt 
                  lg:w-[45%] lg:items-center `} >
                    <a href="" className='text-adapt'>Home</a>
                    <a href="" className='text-adapt'>About</a>
                    <a href="" className='text-adapt'>Projects</a>
                    <a href="" className='text-adapt'>Contacts</a>
                </nav>


            </header>
        </>
    )
}