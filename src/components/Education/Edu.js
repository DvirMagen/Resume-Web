import Eduction from "./Eductaion.js"
import { EDUCATION_DATA } from './EducationData.js';
import { forwardRef } from "react";
const Edu = forwardRef((props, ref) => {
    return(
        <section id="education" ref={ref}>
        <h1>Education</h1>
        <Eduction label={EDUCATION_DATA[0].title}
                    academy={EDUCATION_DATA[0].academy} 
                    years={EDUCATION_DATA[0].years}/>
        </section>

    )
});

export default Edu;