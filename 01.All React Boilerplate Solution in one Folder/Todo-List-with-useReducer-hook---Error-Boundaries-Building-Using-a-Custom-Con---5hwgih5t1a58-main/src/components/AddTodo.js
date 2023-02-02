import React, { useRef } from "react"

const AddTodo = ({ dispatch }) => {
    const inpRef = useRef();
    const handleSubmit = (e)=> {
        e.preventDefault();
        let title = inpRef.current.value;
        if(!title) return;
        let id = Date.now();
        console.log(title,id);
        dispatch({type : 'addTodo', obj: {title,id}})
        inpRef.current.value = '';
    }

    return (
        <form id="todo-form" onSubmit={handleSubmit}>
            <label htmlFor="todo-input">Title</label>
            <input type="text" id="todo-input" ref={inpRef}/>
            <button type="submit">Add To-Do</button>
        </form>
    )
}

export { AddTodo }
