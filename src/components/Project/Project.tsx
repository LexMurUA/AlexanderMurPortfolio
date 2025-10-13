import type { ProjectType } from '../../types/types'
import MovieFinder from '../../assets/MovieFinder.png';

export const Project = ({image,link,name,techkList}:ProjectType) => {
  return (
    <div>
    <div>
      <a href={link} target='blank'><img src={image} alt="Project" /></a>
    </div>

    <div>
      <h2>{name}</h2>
      <ul>
       {techkList.map((skill,idx)=>(
        <li key={idx}>{skill}</li>
       ))}
      </ul>
      <div>
        <h4>See live</h4>
        <button>Live Link</button>
        <button>Code Link</button>
      </div>
    </div>

    </div>
  )
}
