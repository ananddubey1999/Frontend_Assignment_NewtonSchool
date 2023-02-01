import React from 'react';
import { useParams } from 'react-router-dom'


export const BackgroundColorChanger = () =>{
    let {colorname} = useParams();
    console.log(colorname);
    return(
       <main style={{ height: "100vh", backgroundColor: `${colorname}` }}>
       Background Color Change
       </main>
    )
}
