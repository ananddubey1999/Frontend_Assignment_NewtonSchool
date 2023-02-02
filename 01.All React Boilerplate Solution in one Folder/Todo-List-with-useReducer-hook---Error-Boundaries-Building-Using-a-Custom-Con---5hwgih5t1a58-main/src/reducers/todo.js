const todoReducer = (state, action) => {
    switch (action.type) {
        case 'delTodo': return state.filter(td => td.id !== action.id);
        case 'addTodo': return [...state,action.obj];
        default:  return state;
    }
}

export { todoReducer }
