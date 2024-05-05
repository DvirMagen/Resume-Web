import { CONNECTION_DATA } from "./ConnectionData";

export default function Connect(){
    return(
        <section id="connect">
            <h2>Connect</h2>
                <li>
                        <a href={CONNECTION_DATA.github.url} rel="noreferrer" target="_blank">
                                <img src={CONNECTION_DATA.github.logo} alt={CONNECTION_DATA.github.title}/>
                                <p>{CONNECTION_DATA.github.title}</p>
                        </a>
                </li>
                <li>
                    <a href={CONNECTION_DATA.linkedin.url} rel="noreferrer" target="_blank" >
                        <img src={CONNECTION_DATA.linkedin.logo} alt={CONNECTION_DATA.linkedin.title} />
                        <p>{CONNECTION_DATA.linkedin.title}</p>
                    </a>
                </li>
                <li>
                    <a href={CONNECTION_DATA.email.url}>
                        <img src={CONNECTION_DATA.email.logo} alt={CONNECTION_DATA.email.title} />
                        <p>{CONNECTION_DATA.email.title}</p>
                    </a>
                </li>
        </section>
    )
}