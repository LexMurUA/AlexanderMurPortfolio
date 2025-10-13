import { gitHub, linkedIn } from "../../constants/constants";
import linkedInSvg from '../../assets/linkedin.svg';
import gitHubSvg from '../../assets/github.svg';

export const Webs = ()=>{

    return(
        <div className="flex gap-2 p-2">
            <a href={linkedIn} target="blank" ><img src={linkedInSvg} alt="LinkedId" className="adapt-touch w-[7vw] md:w-[4vw] lg:w-[3vw] border-2 p-1 bg-neutral-50" /></a>
            <a href={gitHub} target="blank" ><img src={gitHubSvg} alt="GitHub" className="adapt-touch w-[7vw] md:w-[4vw] lg:w-[3vw] border-2 p-1  bg-neutral-50" /></a>
        </div>
    )
}