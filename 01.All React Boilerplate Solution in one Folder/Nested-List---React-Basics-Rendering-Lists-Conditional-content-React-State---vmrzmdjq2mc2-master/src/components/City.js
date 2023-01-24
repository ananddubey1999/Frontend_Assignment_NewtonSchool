import React,{useState} from 'react'
import Town from './Town'

function City({name,towns,index}) {
    const [clicked, setClicked] = useState(false);
    return (
        <li>
            <h4 id={'city'+(index+1)} onClick={()=>setClicked(!clicked)}>{name}</h4>
            {clicked ? (
                <ul>
                {towns.map(item=>(
                    <Town 
                    name={item.name} 
                    index={towns.indexOf(item)} />
                ))}
                </ul>     
            ):null}
        </li>
    )
}

export default City
