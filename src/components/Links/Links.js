import Connect from "../../components/Connect/Connect.js"
import QuickRoll from "../../components/QuickRoll/QuickRoll.js"

export default function Links({scrollToSection}){
    // console.log('Links scrollToSection:',scrollToSection);
    return(
        <section id ="links">
            <ul>
                <li><Connect /></li>
                <li><QuickRoll scrollToSection={scrollToSection}/></li>
            </ul>
        </section>
    )
}