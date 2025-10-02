import * as React from 'react';
import {useEffect} from "react";
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import getData from '../services/WeatherServices.js';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.background.level1,
    }),
}));


export default function Weather() {

    const [weatherData, setWeatherData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            setWeatherData(null);
            try {
                const data = await getData();
                if (data) {
                    setWeatherData(data);
                }
            } catch (error) {
                    setError(error.message || "Failed to fetch weather");
                } finally {
                    setLoading(false);
                }
            }
        fetchData();
    }, []);

    if (loading) {
        return (
            <Grid container spacing={2} sx={{ flexGrow: 1 }} style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem',
            }}>
                <Grid size={12}>
                    <Item>
                        <p> Loading weather...</p>
                    </Item>
                </Grid>
            </Grid>
        );
    }

    if (error) {
        return (
            <Grid container spacing={2} sx={{ flexGrow: 1 }} style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem',
            }}>
                <Grid size={12}>
                    <Item style={{ color: 'red' }}>
                        Error: {error}
                    </Item>
                </Grid>
            </Grid>
        );
    }

    // Data fetched to view
    const { location, current } = weatherData || {};
    const city = location?.name || 'Unknown';
    const land = location?.country || 'Unknown Country';
    const regional = location?.region || 'Unknown';
    const temp = current.temp_c || 'N/A';
    const condition = current?.condition?.text || 'N/A';

    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }} style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '1rem',
        }}>
            <Grid size={8}>
                <Item>
                    <h2>{city}</h2>
                    <h3>{land}</h3>
                    <h4>{regional}</h4>
                </Item>
            </Grid>
            <Grid size={2}>
                <Item>
                    <h2>Condition: {condition}</h2>
                    <h3>Feels like: {current?.feelslike_c || 'N/A'}°C</h3>
                    <p>Temperature: {temp}°C</p>
                </Item>
            </Grid>
            <Grid size={8}>
                <Item>
                    <h2>Last updated: <br/>{new Date(current?.last_updated || Date.now()).toLocaleString()}</h2>
                </Item>
            </Grid>
        </Grid>
    );
}