export default function Eduction({label, academy, years})
{
    return (
        <li>
            <div>
                <h2>{label}</h2>
                <h3>{academy}</h3>
                <p>{years}</p>
            </div>
        </li>
    );
}