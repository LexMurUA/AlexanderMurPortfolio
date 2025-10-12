import './Main.css';
import backgroundblue from '../../assets/bacgroundblue.jpg'
export const Main = () => {

    return (
        <main className='my-container  xl: w-[100%] '>
            <section id='about' className='flex justify-center items-center bg-[url("../../../public/art/bacgroundblue.jpg")] bg-center bg-no-repeat bg-cover'
>
                <div className='border p-4  w-full text-adapt flex flex-col items-center text-center gap-4'>
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
                    <button className='adapt-touch text-adapt border py-2 px-4 bg-neutral-50 rounded-[5px]'>PROJECTS</button>
                </div>
            </section>


        </main>
    )
}