export default function ClickableButton({label, onSelect, isSelected}){
    function clickHandler(){
        console.log('Button clicked');
        console.log(`You clicked on ${label}`);
    }
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{label}</button>
        </li>
    );
}