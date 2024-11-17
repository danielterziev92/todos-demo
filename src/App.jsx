import {useEffect} from 'react'
import TodoList from "./components/todo-list/TodoList.jsx";
import TodoCreate from "./components/todo-create/TodoCreate.jsx";
import {useDispatch} from "react-redux";
import {addTodo} from "./features/todoSlice.js";
import {Box, Grid2} from "@mui/material";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const todos = localStorage.getItem('todos');
        console.log()
        if (todos) {
            const allTodos = JSON.parse(todos);
            allTodos.map(todo => dispatch(addTodo(todo)));
        }
    }, []);
    return (
        <Box justifyContent='center' display='flex' alignItems='center'>
            <Grid2 container>
                <Grid2 size={12}>
                    <TodoList/>
                </Grid2>
                <Grid2 size={12}>
                    <TodoCreate/>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default App
