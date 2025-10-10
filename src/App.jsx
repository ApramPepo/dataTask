import * as React from 'react';
import Form from "./components/form.jsx";
import List from "./components/list.jsx";
import { Box } from "@mui/material";

export default function App() {
    const [task, setTask] = React.useState([]);
    const handleAddTask = (newTask) => {
        setTask((prevTask) => [...prevTask, newTask]);
    };

    const handleEdit = (updateTask) => {
        setTask((prevTask) =>
        prevTask.map((task) =>
            task.id === updateTask.id ? updateTask : task
            )
        );
    };

    const handleDelete = (taskId) => {
        setTask((prevTask) => prevTask.filter((task) => task.id !== taskId));
    };

    return (
        <Box sx={{ padding: 1, display: 'flex', alignItems: 'flex-start', gap: 2, width: '95%', margin: '0 auto', flexDirection: 'row', '@media (max-width: 900px)': { flexDirection: 'column', alignItems: 'center' }, }}>
            <Form onsubmit={handleAddTask}/>
            <List task={task} onEdit={handleEdit} onDelete={handleDelete} />
        </Box>
    );
}