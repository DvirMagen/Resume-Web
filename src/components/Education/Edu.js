import EducationSection from "./EducationSection.js"
import { forwardRef } from "react";

const Edu = forwardRef((props, ref) => {
    return <EducationSection ref={ref} />
});

export default Edu;