import './Header.css';
import { forwardRef } from 'react';

const reactDescriptins = [
    "A Full Stack Developer",
    "SW && HW Developer",
    "A Software Developer",
    "A Web Developer"
]
function getRandonInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

const Header = forwardRef((props, ref)=> {
    const description = reactDescriptins[getRandonInt(3)];
    return ( 
    <header ref={ref}>
        <div>
        <h2>Hey,<br></br>I'm Dvir Magen</h2>
        <p>
            {description}
        </p>
    </div>
    </header>
    )
});

export default Header;