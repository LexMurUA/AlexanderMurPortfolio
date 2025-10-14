import type { ProjectType } from '../../types/types'


export const Project = ({ image, link, name, techkList,codeLink }: ProjectType) => {
  return (
    
    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mt-8  lg:mt-20 '>
      
      <div className='w-[75%] lg:w-1/2 md:w-[50%] lg:w-[35%] overflow-hidden rounded-[15px]  '>
        <a href={link} target='blank'><img src={image} alt="Project" className=' min-w-full
          h-auto transition-transform duration-300 ease-in-out hover:scale-110 object-cover rounded-[15px]' /></a>
      </div>

      <div className='lg:w-1/2 lg:px-16 flex flex-col items-center text-center gap-4 lg:border-b-2 lg:pb-8 lg:border-dotted'>
        <h2 className='text-title text-blue-400'>{name}</h2>
        <ul className='flex flex-wrap justify-center gap-3 list-disc list-outside pl-3  '>
          {techkList.map((skill, idx) => (
            <li className='text-adapt pr-3 text-gray-600 ' key={idx}>{skill}</li>
          ))}
        </ul>
        <div className='flex flex-col  gap-2'>
          <h4 className='text-title'><i>See live</i></h4>
          <button className='my-btn adapt-touch text-adapt font-bold border-dotted text-gray-600 bg-transparent uppercase'>
            <a href={codeLink} target='blank'>Code Link</a></button>
          <button className='my-btn adapt-touch bg-blue-400 text-adapt font-bold uppercase'>
            <a href={link} target='blank'>Live Link</a>
          </button>
        </div>
      </div>

    </div>
  )
}
