import {Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {completeTodo} from "../../features/todoSlice.js";
import {useEffect} from "react";

function TodoList() {
    const dispatch = useDispatch();

    const todoList = useSelector(state => state.todo.uncompletedTodos);

    useEffect(() => {
        if (todoList.length === 0) return;

        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    function completeTodoHandler(todo) {
        dispatch(completeTodo(todo));
    }

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {todoList.map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                    <ListItem key={value.id} disablePadding>
                        <ListItemButton role={undefined} onClick={() => completeTodoHandler(value)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value.name}/>
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TodoList;