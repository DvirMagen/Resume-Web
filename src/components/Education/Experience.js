import Eduction from "./Eductaion.js"
import { EDUCATION_DATA } from './EducationData.js';
export default function Experience(){
    return(
        <section id="education">
        <h1>Experience</h1>
        <Eduction label={EDUCATION_DATA[1].title}
                    academy={EDUCATION_DATA[1].academy} 
                    years={EDUCATION_DATA[1].years}  />
        </section>
    )
}