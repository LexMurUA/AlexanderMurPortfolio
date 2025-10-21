import gW from '../../assets/GW.png';
import MovieFinder from '../../assets/MovieFinder.png';
import ps from '../../assets/PS.png';
import rs from '../../assets/RS.png';
import aP from '../../assets/ap.png';
import backBlue from '../../assets/bacgroundblue.jpg';
import backWall from '../../assets/backwall.jpg';
import tDl from '../../assets/tDl.png';
import { Project } from '../../components/Project/Project';
import { Webs } from '../../components/Webs/Webs';
import { adminPanel, adminPanelCode, diplomaPython, diplomaReact, gameWorld, gameWorldCode, gitHub, linkedIn, movieFinderLink, movieFinderLinkCode, telegram, toDoList, toDoListCode } from '../../constants/constants';
import './Main.css';

export const Main = () => {



    return (
        <main className='my-container  xl: w-[100%] '>
            <section style={{
                backgroundImage: `url(${backBlue})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
                id='about' className='flex justify-center p-8 items-center'>
                <div className='p-8  w-full lg:w-[75%] text-adapt flex flex-col items-center text-center gap-4'>
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
                    <button className='adapt-touch text-adapt my-btn'><a href="#projects">PROJECTS</a></button>
                    <Webs />
                </div>
            </section>

            <section className='flex flex-col p-8'>

                <div className='flex flex-col items-center gap-3   lg:gap-13 px-4 py-8 '>

                    <div className='text-center '>
                        <h2 className='text-title'>About Me</h2>
                        <p className='text-adapt mt-2 text-center'><i>“Making the simple complex doesn't take ingenuity. Making the complex simple, now, that's ingenuity!​”, <b> ― Ernie J. Zelinski (Author of The Joy of Not Working)</b></i></p>

                    </div>

                    <div className='flex flex-col lg:flex-row lg:gap-10'>
                        <div className='w-full lg:w-1/2'>
                            <h3 className='text-adapt'><b>Get to know me!</b></h3>
                            <p className="text-adapt mt-4">
                                Hey! I'm <strong>Alexander Murakhin</strong> — a <strong>Junior Frontend Web Developer (React.js)</strong> based in Kyiv, Ukraine. <br />

                                My path into web development started with curiosity, a few small projects during my internship, and countless late-night discussions with ChatGPT.😁 <br />
                                Since then, I’ve become a Junior Front-End Developer, combining daily work with continued learning — finishing courses in Python and React along the way.
                                For me, coding is a way to create something meaningful and improve a bit every day. <br />

                                My background has taught me to be <strong>an inventive and adaptable team player with strong communication and problem-solving skills</strong>. <br />

                                I’m now seeking a <strong>Junior Frontend (React)</strong> position where I can grow, collaborate with talented professionals, and create <strong>meaningful digital products</strong> for businesses and consumers alike.

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
                    <p className="text-adapt mt-4">More than a year of learning and working under the mentorship of experienced professionals — with detailed code reviews and daily practice — has only strengthened my passion for creating and understanding code in depth. That’s why I’m always full of enthusiasm and eager to take on new challenges in Front-End Development.</p>
                    <div className='flex flex-col w-full gap-4'>
                        <h3 className='text-title text-left lg:text-center mt-10  mb-10'><b>Diplomas</b></h3>
                        <div className='flex flex-col w-full md:flex-row gap-4 lg:w-[50%] lg:justify-evenly  lg:w-[100%]'>
                            <a href={diplomaReact} target='blank' className=' h-full adapt-touch lg:w-[45%] '><img src={rs} alt="React Diploma" className=' object-contain    ' /></a>
                            <a href={diplomaPython} target='blank' className=' h-full adapt-touch lg:w-[45%]'><img src={ps} alt="Python Diploma " className='object-contain    ' /></a>
                        </div>
                    </div>

                    <button className='adapt-touch text-adapt my-btn self-center mt-4 uppercase bg-blue-400'><a href="#contacts">Contacts</a></button>


                </div>
            </section>

            <section id='projects' className='flex flex-col bg-neutral-50'>
                <div className='p-10'>
                    <h3 className='text-title text-center'>PROJECTS</h3>
                    <Project image={MovieFinder} link={movieFinderLink} name='Movie-Finder TypeScript Project'
                        techkList={['JavaScript', 'TypeScript', 'React', 'RTK-QUERY', 'REST API', 'SCSS', 'Vite',
                            'Framer Motion']} codeLink={movieFinderLinkCode} />
                    <Project image={aP} link={adminPanel} name='Admin Panel MUI Project (Redux Toolkit & Redux Persist)' techkList={[
                        'JavaScript', 'MUI', 'React', 'Redux-Toolkit/Persist', 'REST API', 'SCSS', 'Vite'
                    ]} codeLink={adminPanelCode} />
                    <Project image={tDl} link={toDoList} name='To Do List React Project' techkList={[
                        'JavaScript', 'React', 'Vite', 'SCSS',
                    ]} codeLink={toDoListCode} />
                    <Project image={gW} link={gameWorld} name='GAMEWORLD Python Django Project' techkList={[
                        'Python', 'OOP', 'JavaScript', 'Django', 'CSS', 'SQLite',
                    ]} codeLink={gameWorldCode} />
                </div>
            </section>

            <section style={{
                backgroundImage: `url(${backBlue})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }} id='contacts'>
                <div className='p-8 flex flex-col items-center gap-8'>
                    <h3 className='text-title text-center'>Contacts details</h3>
                    <span className='text-adapt'><i>Feel free to contact me</i></span>
                    <div style={{ backgroundImage: `url(${backWall})` }}
                        className="w-full md:w-[75%] lg:w-1/2 bg-center bg-cover bg-no-repeat  flex flex-row flex-wrap justify-center text-center  ">
                        <span className=' w-1/2 adapt-touch text-adapt p-2 font-semibold '><a href="tel:+380636111954">+38(063)611-19-54</a></span>
                        <span className=' w-1/2 adapt-touch text-adapt p-2 font-semibold'><a href="mailto:lex16mur@gmail.com">lex16mur@gmail.com</a></span>
                        <span className=' w-1/3 adapt-touch text-adapt p-2 text-blue-500 font-semibold'><a href={linkedIn} target='blank'>LinkedIn</a></span>
                        <span className=' w-1/3 adapt-touch text-adapt p-2 text-blue-500 font-semibold'><a href={gitHub} target='blank'>GitHub</a></span>
                        <span className=' w-1/3 adapt-touch text-adapt p-2 text-blue-500 font-semibold'><a href={telegram} target='blank'>Telegram</a></span>
                    </div>
                </div>
            </section>

        </main>


    )
}