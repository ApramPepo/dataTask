import * as React from 'react';
import Switch from '@mui/material/Switch';
import {useEffect} from "react";
import {Box} from "@mui/material";

export default function Clock() {
    const [time, setTime] = React.useState(new Date());
    const [is24Hours, setIs24Hours] = React.useState(false);
    const [region, setRegion] = React.useState(Intl.DateTimeFormat().resolvedOptions().timeZone);


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const updateRegion = () => {
         setRegion(Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown');
        };

        updateRegion();

        window.addEventListener('timezonechange', updateRegion);
        return () => window.removeEventListener('timezonechange', updateRegion);
    }, [])

    const timeFormat = (date) => {
        const hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        if(is24Hours) {
            return `${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
        } else {
            const pmAmHours = hours >= 12 ? 'PM' : 'AM';
            const hours12 = hours % 12 || 12;
            return `${hours12}:${minutes}:${seconds}:${pmAmHours}`;
        }
    };

    const handleTimeToggle = () => {
        setIs24Hours(!is24Hours);
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center'}}>
            <Box sx={{ fontFamily: 'monospace', fontSize: '1.5rem' }}>
                {timeFormat(time)} ({region})
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <span>12h</span>
                <Switch checked={is24Hours} onChange={handleTimeToggle} />
                <span>24h</span>
            </Box>
        </Box>
    )
}