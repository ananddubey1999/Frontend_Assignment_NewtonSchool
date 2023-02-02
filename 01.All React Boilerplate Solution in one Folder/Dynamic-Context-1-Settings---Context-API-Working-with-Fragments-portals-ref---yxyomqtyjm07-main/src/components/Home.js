import React from 'react';
import { UserContext } from '../context/userContext';

// do not change this component
export const Home = () => {
    const {greeting} = React.useContext(UserContext)

    return (
        <div style={{border:'6px solid yellow',padding:'8px', marginTop:'1rem'}} id="home">
            <h4>Home</h4>
            {`Current greeting as per setting is:- ${greeting}`}
        </div>
    )
}