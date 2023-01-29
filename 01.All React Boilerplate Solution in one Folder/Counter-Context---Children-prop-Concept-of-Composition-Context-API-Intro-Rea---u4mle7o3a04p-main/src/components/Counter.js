import React from 'react'

export const Counter = ({value,onClick , id}) =>{

    return(
        <div id={`counter-num-${id}`}>
            <div id={`counter-${id}`}>{value}</div>
            <button onClick={onClick}>Click to increase</button>
        </div>
        
    )

}
