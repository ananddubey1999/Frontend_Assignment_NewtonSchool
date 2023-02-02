 import React from 'react';

 export const Todo  = (props) =>{
    return(
        <>
            <div className="todo" id="todo-${id}">
                {props.id}
                <div className='todo-title'>
                    {props.title}
                    <div className='todo-status'>
                    {props.completed}
                    </div>
                </div>
            </div>
            
        </>
    )      
 }
