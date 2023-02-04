import React from 'react';

export const Todo = (e) => {
    return (
        <div>
            <ul>
                <li>
                    <div className='todo' id={`todo-${e.id}`}>
                        <div className='todo-title'>
                            {e.title}
                        </div>
                        <div className='todo-status'>
                            {e.completed ? "Completed" : "Incompleted"}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
