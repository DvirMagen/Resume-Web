import About from "./About"
import { forwardRef } from "react"

const CoreConcepts = forwardRef((props, ref) => {
    return <About ref={ref} />
});

export default CoreConcepts;