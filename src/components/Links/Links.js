import React, {useState, useEffect} from "react";

import Connect from "../../components/Connect/Connect.js"
import QuickRoll from "../../components/QuickRoll/QuickRoll.js"

export default function Links({scrollToSection}){
    const [isColumn, setIsColumn] = useState(false);

    useEffect(() => {
        function handleResize() {
            const links = document.getElementById('links');
            const width = links.offsetWidth;
            const height = links.offsetHeight;
            setIsColumn(width < height); // Set isColumn based on whether width is less than height
        }

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <section id ="links" className={isColumn ? '' : 'space-evenly'}>
            <Connect />
            <QuickRoll scrollToSection={scrollToSection}/>
        </section>
    )
}