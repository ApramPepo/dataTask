import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Checkbox, Autocomplete, FormControlLabel} from '@mui/material';

const priorityOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
];

const repeatOptions = [
    { label: 'None', value: 'none' },
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
];

export default function List({ task, onEdit, onDelete }) {

    const [editTask, setEditTask] = React.useState(null);
    const [editFormData, setEditFormData] = React.useState(null);

    const handleEditClick = (task) => {
        setEditTask(task.id);
        setEditFormData({...task});
    };

    const handleEditChange = (e,newValue,name) => {
        if (e && e.target) {
            const {name: targetName, value, type, checked} = e.target;
            setEditFormData((prev) => ({ ...prev, [targetName]: type === 'checkbox' ? checked : value, }));
        } else {
            setEditFormData((prev) => ({
                ...prev,
                [name]: newValue,
            }));
        }
    };

    const handleSaveEdit = () => {
        onEdit(editFormData);
        setEditTask(null);
        setEditFormData(null);
    };

    const handleCancelEdit = () => {
        setEditTask(null);
        setEditFormData(null);
    }

    return (
        <TableContainer component={Paper} sx={{ width: '100%', '@media (min-width: 901px)': { maxWidth: '60%' } }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Task Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Repeat</TableCell>
                        <TableCell>Important</TableCell>
                        <TableCell>Done</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {task.map((task) =>
                        editTask === task.id ? (
                            <TableRow key={task.id}>
                                <TableCell>
                                    <TextField
                                        name="taskName"
                                        value={editFormData.taskName}
                                        onChange={handleEditChange}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        name="description"
                                        value={editFormData.description}
                                        onChange={handleEditChange}
                                        size="small"
                                        multiline
                                        rows={2}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        type="date"
                                        name="date"
                                        value={editFormData.date}
                                        onChange={handleEditChange}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Autocomplete
                                        options={priorityOptions}
                                        getOptionLabel={(option) => option.label}
                                        value={editFormData.priority}
                                        onChange={(e, newValue) => handleEditChange(e, newValue, 'priority')}
                                        renderInput={(params) => <TextField {...params} size="small" />}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Autocomplete
                                        options={repeatOptions}
                                        getOptionLabel={(option) => option.label}
                                        value={editFormData.repeat}
                                        onChange={(e, newValue) => handleEditChange(e, newValue, 'repeat')}
                                        renderInput={(params) => <TextField {...params} size="small" />}
                                    />
                                </TableCell>
                                <TableCell>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="important"
                                                checked={editFormData.important}
                                                onChange={handleEditChange}
                                            />
                                        }
                                        label="Important"
                                    />
                                </TableCell>
                                <TableCell>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="done"
                                                checked={editFormData.done}
                                                onChange={handleEditChange}
                                            />
                                        }
                                        label="Done"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button onClick={handleSaveEdit} color="primary" size="small">
                                        Save
                                    </Button>
                                    <Button onClick={handleCancelEdit} color="secondary" size="small">
                                        Cancel
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ) : (
                            <TableRow key={task.id}>
                                <TableCell>{task.taskName}</TableCell>
                                <TableCell>{task.description}</TableCell>
                                <TableCell>{task.date}</TableCell>
                                <TableCell>{task.priority.label}</TableCell>
                                <TableCell>{task.repeat.label}</TableCell>
                                <TableCell>{task.important ? 'Yes' : 'No'}</TableCell>
                                <TableCell>{task.done ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleEditClick(task)} color="primary" size="small">
                                        Edit
                                    </Button>
                                    <Button onClick={() => onDelete(task.id)} color="secondary" size="small">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}