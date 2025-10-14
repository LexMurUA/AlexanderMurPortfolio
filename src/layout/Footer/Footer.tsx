import { Webs } from '../../components/Webs/Webs';
import './Footer.css';

export const Footer = ()=>{

    return(
        <footer className='my-container bg-black p-10 flex flex-col lg:flex-row items-center lg:justify-evenly gap-4'>
            <div className='text-center lg:text-start'>
                <h2 className='text-title text-neutral-50'>Alexander Murakin</h2>
                <p className='text-adapt text-center text-neutral-50'>Designing with Tailwind and way too much classname="border"</p>
            </div>
                <Webs />
        </footer>
    )
}