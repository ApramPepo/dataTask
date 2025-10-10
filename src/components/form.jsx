import * as React from 'react';
import {TextField, Button, Box, FormControlLabel} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';

const priorityOptions = [
    { label: 'Low', value: 'low' },
    { label: 'Medium', value: 'medium' },
    { label: 'High', value: 'high' },
]

const repeatOptions = [
    { label: 'None', value: 'none' },
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
]

export default function Form({ onsubmit }) {
    const [formData, setFormData] = React.useState({
        taskName: '',
        description: '',
        date: '',
        priority: priorityOptions[1],
        important: false,
        repeat: repeatOptions[0],
        done: false,
    });

    const handleChange = (e, newValue, name) => {
        if(e && e.target) {
            const { name: targetName, value, type, checked } = e.target;
            setFormData(prev => ({
                ...prev,
                [targetName]: type === 'checkbox' ? checked : value,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: newValue,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            ...formData
        };
        onsubmit(newTask);
       setFormData({
           taskName: '',
           description: '',
           date: '',
           priority: priorityOptions[1],
           important: false,
           repeat: repeatOptions[0],
           done: false,
       });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 3, alignItems: 'center', flexDirection: 'column', width: '100%' }} className="form" autoComplete="off">
            <TextField id="taskName" label="Task Name" variant="outlined" name="taskName" required={true} value={formData.taskName} onChange={handleChange} sx={{ width: '30vw'}} />
            <TextField id="description" label="Task Description" name="description" multiline rows={3} required={false} value={formData.description} onChange={handleChange} sx={{ width: '30vw'}} />
            <TextField type="date" id="date" variant="outlined" name="date" value={formData.date} onChange={handleChange} sx={{ width: '30vw'}} required={true} />
            <Autocomplete
                disablePortal
                options={priorityOptions}
                getOptionLabel={(option) => option.label}
                value={formData.priority}
                onChange={(e, newValue) => handleChange(e, newValue, 'priority')}
                sx={{ width: '30vw' }}
                renderInput={(params) => <TextField {...params} label="Priority" required={true} />}
            />
            <Autocomplete
                disablePortal
                options={repeatOptions}
                getOptionLabel={(option) => option.label}
                value={formData.repeat}
                onChange={(e, newValue) => handleChange(e, newValue, 'repeat')}
                sx={{ width: '30vw' }}
                renderInput={(params) =>
                    <TextField {...params} label="Repeat" required={true} />}
            />
            <Box sx={{ width: '30vw', display: 'flex', justifyContent: 'center', gap: 5 }}>
                <FormControlLabel control={
                    <Checkbox
                    name="important"
                    checked={formData.important}
                    onChange={handleChange}/>
                }
                label="Important"/>
                <FormControlLabel
                control={
                    <Checkbox
                    name="done"
                    checked={formData.done}
                    onChange={handleChange} />
                }
                label="Done"/>
            </Box>

            <Button variant="contained" type="submit" color="primary">Submit</Button>
        </Box>
    )
}