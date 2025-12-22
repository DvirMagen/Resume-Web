import './Header.css';
import { forwardRef } from 'react';
import ResumeHeader from '../ResumeHeader/ResumeHeader';
import { CONNECTION_DATA } from '../Connect/ConnectionData';

const Header = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <ResumeHeader
                name="Dvir Magen"
                title="Full Stack Developer"
                email="Dvirmagen@gmail.com"
                links={{
                    github: CONNECTION_DATA.github,
                    linkedin: CONNECTION_DATA.linkedin
                }}
            />
        </div>
    );
});

export default Header;