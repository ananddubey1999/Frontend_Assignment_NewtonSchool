import React,{useState} from 'react'
import City from './City'
function Province ({name, cities, index }) {
    const [clicked, setClicked] = useState(false);
    function handleClick(){
        setClicked(!clicked)
    }

    return (
        <li>
            <h3 id={'state'+(index +1)} onClick={handleClick}>{name}</h3>
            {clicked ? (
                <ul>
                {cities.map(item=>(
                    <City 
                    name={item.name} 
                    towns={item.towns} 
                    index={cities.indexOf(item)} />
                ))}
                </ul>     
            ):null}
        </li>
    )
}
export default Province
