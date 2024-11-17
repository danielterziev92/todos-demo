import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    uncompletedTodos: [],
}


export const todosSlices = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            state.uncompletedTodos.push(actions.payload);
        },
        completeTodo: (state, actions) => {
            state.uncompletedTodos = state.uncompletedTodos.filter(todo => todo.id !== actions.payload.id)
        },
    }
});

export const {
    addTodo,
    completeTodo,
} = todosSlices.actions;

export default todosSlices.reducer;