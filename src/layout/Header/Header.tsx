import { useState } from 'react';
import me from '../../assets/me.png';
import './Header.css';


export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const toggle = () => {
        setOpenMenu(prev => !prev)
    }
    return (
        <header className='container px-9 py-0 fixed top-0 left-0 bg-red-600 border border-red-800 '>
            <div className='flex justify-between sm:justify-around ' >
                <div className='flex items-center border border-amber-100 p-2 gap-2'>
                    <img src={me} alt="Myfoto" className='border rounded-full w-20 h-20 object-cover ' />
                    <span className='w-full text-adapt border font-medium text-red-900'>Alexander Murakin</span>
                </div>

                <nav className={`flex items-center border-green-700 gap-16 text-lg font-medium text-blue-400 text-adapt sm:absolute left-[${openMenu ? '50%' : '100%'}]`} >
                    <a href="" className='link-nav '>Home</a>
                    <a href="" className='link-nav'>About</a>
                    <a href="" className='link-nav'>Projects</a>
                    <a href="" className='link-nav'>Contacts</a>
                </nav>
                <button onClick={toggle}>P</button>
            </div>

        </header>
    )
}