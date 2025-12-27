import About from "./About"
import { forwardRef } from "react"

const CoreConcepts = forwardRef((props, ref) => {
    return <About ref={ref} />
});

CoreConcepts.displayName = 'CoreConcepts';

export default CoreConcepts;