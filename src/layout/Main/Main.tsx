import './Main.css';
import { Webs } from '../../components/Webs/Webs';
export const Main = () => {

    return (
        <main className='my-container  xl: w-[100%] '>
            <section id='greetings' className='flex justify-center items-center bg-[url("../../../public/art/bacgroundblue.jpg")] bg-center bg-no-repeat bg-cover'
            >
                <div className='p-4  w-full lg:w-[75%] text-adapt flex flex-col items-center text-center gap-4'>
                    <span>👋</span>
                    <h1 className='text-title text-neutral-50'>HEY, MY NAME IS <br />
                        ALEXANDER MURAKHIN
                    </h1>
                    <p className='mt-4 text-neutral-50'>
                        Im'a <strong> Junior Frontend Web Developer </strong>
                        looking for a Junior Front End (React) position to work
                        with HTML5&amp;CSS3, JavaScript, React.js technologies to create effective, user-oriented web applications
                        contributing to the growth of my skills and success of the company.
                    </p>
                    <button className='adapt-touch text-adapt my-btn'>PROJECTS</button>
                    <Webs />
                </div>
            </section>

            <section id='about' className='flex flex-col border-2 border-amber-300'>

                <div className='flex flex-col items-center gap-3 lg:gap-8 px-4 py-8'>

                    <div className='text-center '>
                        <h2 className='text-title'>About Me</h2>
                        <p className='text-adapt mt-2 text-center'><i>“Making the simple complex doesn't take ingenuity. Making the complex simple, now, that's ingenuity!​”, <b> ― Ernie J. Zelinski (Author of The Joy of Not Working)</b></i></p>

                    </div>

                    <div className='flex flex-col lg:flex-row lg:gap-10'>
                        <div className='w-full lg:w-1/2'>
                            <h3 className='text-adapt'><b>Get to know me!</b></h3>
                            <p className="text-adapt mt-4">
                                Hey! It's
                                <strong>Yuliia Zavistovska</strong>
                                and I'm a <strong> Junior Frontend Web Developer (React.js) </strong> located in
                                Kyiv, Ukraine. Having worked as IT Customer
                                Manager, as well as having completed Front-End courses successfully, I am particularly interested in a
                                Junior Front End (React) position.
                                My background has required me to be a strong <strong>
                                    manager of Customer Service and Conflict Resolution Department </strong> what, I am confident, will be
                                an important quality to join a company with growth potential to collaborate with talented people
                                creating <strong> digital products </strong> for both business and consumer use.

                            </p>
                        </div>

                        <div className='w-full gap-2 lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-center  '>
                            <h3 className='self-start text-adapt'><b>My skills</b></h3>
                            <div className='mt-4 flex flex-wrap gap-3 lg:gap-4'>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600 '>HTML5</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>CSS</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600 '>SASS(SCSS)</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Tailwind</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>JavaScript</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600 '>TypeScript</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>React</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Redux Toolkit</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Zustand</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Vite</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Webpack</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Python</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>OOP</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Django</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Adaptive/Responsive</span>
                                <span className='hover:bg-blue-400 px-4 py-2 bg-gray-300/70 rounded-[5px] text-adapt text-gray-600'>Figma</span>
                            </div>

                        </div>
                    </div>
                        <p className="text-adapt mt-4">Several years on maternity leave became one of the most powerful motivation for my professional self-realization. So, I am always up to the job and learning Front End Development root and branch. Feel free to contact me 😊</p>
                        <button className='adapt-touch text-adapt my-btn self-center mt-4'>Contact</button>


                </div>
            </section>


        </main>
    )
}