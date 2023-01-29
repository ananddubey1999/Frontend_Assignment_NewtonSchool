import React,{useContext} from 'react';
import { counterContext } from '../counterContext';
import { Counter } from './Counter';

export const CounterList = () =>{

    const {count,setCount} = useContext(counterContext)

    const onClick = () =>{
        setCount(count+1)
    }

    return(
        <ol>
            <li><Counter key={1} id="1" value={count} onClick={onClick}/></li>
            <li><Counter key={2} id="2" value={count} onClick={onClick}/></li>
            <li><Counter key={3} id="3" value={count} onClick={onClick}/></li>
        </ol>
    )

} 
