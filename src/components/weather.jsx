import * as React from 'react';
import {useEffect} from "react";
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import getData from '../services/WeatherServices.js';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
    const [longitude, setLongitude] = React.useState(null);
    const [latitude, setLatitude] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [unit, setUnit] = React.useState('C');

    useEffect(() => {
        const fetchData = async (lat, long) => {
            setLoading(true);
            setError(null);
            setWeatherData(null);
            try {
                const data = await getData(lat, long);
                if (data) {
                    setWeatherData(data);
                } else {
                    setError('Weather data not found');
                }
            } catch (error) {
                    setError(error.message || "Failed to fetch weather");
                } finally {
                    setLoading(false);
                }
            };

        function weatherData() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                        const lat = position.coords.latitude;
                        const long = position.coords.longitude;
                        setLatitude(lat);
                        setLongitude(long);
                        setError(null);
                        fetchData(lat, long);
                    },
                    (err) => {
                        setError(err.message);
                        console.error("Geolocation error", err);
                        fetchData(null, null);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 30000,
                        maximumAge: 0,
                    });
            } else {
                setError("Geolocation not supported by this browser.");
                fetchData(null, null);
            }
        }

        const time = new Date();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const milliseconds = time.getMilliseconds();
        const minutesToNextInterval = (15 - (minutes % 15)) % 15 || 15;
        const secondsToNextInterval = minutesToNextInterval * 60 - seconds;
        const msToNextInterval = secondsToNextInterval * 1000 - milliseconds;

        const timeoutID = setTimeout(() =>{
            weatherData()
            const intervalID = setInterval(weatherData, 15 * 60 * 1000);
            return () => clearInterval(intervalID);
        }, msToNextInterval);

        weatherData();
        return () => clearTimeout(timeoutID);
        // const intervalRef = setInterval(weatherData, 15 * 60 * 1000);

        }, []);

    const handleToggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
    }
    if (loading) {
        return (
            <Grid container spacing={2} sx={{ flexGrow: 1 }} style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem',
            }}>
                <Grid size={12}>
                    <Item>
                        <h1> Loading weather...</h1>
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
    const temp = unit === 'C' ? current.temp_c : current.temp_f || 'N/A';
    const feelsLike = unit ===  'C' ? current?.feelslike_c : current?.feelslike_f || 'N/A';
    const symbols = unit === 'C' ? '°C' : '°F';
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
                    <h3>{location?.country || 'Unknown Country'}</h3>
                    <p>{location?.region || 'Unknown'}</p>
                </Item>
            </Grid>
            <Grid size={2}>
                <Item>
                    <h2>Condition: {condition}</h2>
                    <h3>Feels like: {feelsLike}{symbols}</h3>
                    <p>Temperature: {temp}{symbols}</p>
                </Item>
            </Grid>
            <Grid size={8}>
                <Item>
                    <h3>Last updated: <br/><br/>{new Date(current?.last_updated || Date.now()).toLocaleString()}</h3>
                    <p>Wind speed: {current?.wind_mph || 'N/A'} mph</p>
                </Item>
            </Grid>
            <Grid size={2}>
                <Item> <br/>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleToggleUnit}><h3>Toggle weather <br/>Measurements</h3></Button>
                    </Stack>
                </Item>
            </Grid>
        </Grid>
    );
}