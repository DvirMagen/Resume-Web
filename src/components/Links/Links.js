import React from "react";
import Connect from "../../components/Connect/Connect.js"
import QuickRoll from "../../components/QuickRoll/QuickRoll.js"
import './Links.css';

export default function Links({scrollToSection}){
    return(
        <section id="links" className="links-container">
            <Connect />
            <QuickRoll scrollToSection={scrollToSection}/>
        </section>
    )
}