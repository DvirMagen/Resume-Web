import CoreConcept from "./CoreConcepts"
import { CORE_CONCEPTS } from "../../data"
import { forwardRef } from "react"

const CoreConcepts = forwardRef((props, ref) => {
    return(
        <section id="core-concepts" ref={ref}>
        <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
        />
        </section>
    )
});

export default CoreConcepts;