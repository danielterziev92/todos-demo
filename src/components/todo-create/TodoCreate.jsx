import {Button, Grid2, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "react-redux";

import * as Yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form";
import {addTodo} from "../../features/todoSlice.js";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().matches(/^\D+$/, 'Do not use number'),
});

function TodoCreate() {
    const dispatch = useDispatch();

    const todoList = useSelector(state => state.todo.uncompletedTodos);


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
        reValidateMode: 'onChange'
    });

    function addTodoHandler(data) {
        const lastId = todoList.slice(-1)[0]?.id || 0;
        dispatch(addTodo({id: lastId + 1 , ...data}));
    }

    return (
        <form onSubmit={handleSubmit(addTodoHandler)}>
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <TextField id='todo' label="todo" type="text" variant="standard"
                               error={!!errors.name} {...register('name')}
                               helperText={errors.todo ? errors.todo.message : ''}/>
                </Grid2>
                <Grid2 size={12}>
                    <Button variant="contained" endIcon={<SendIcon/>} type="submit">
                        Send
                    </Button>
                </Grid2>
            </Grid2>
        </form>
    );
}

export default TodoCreate;