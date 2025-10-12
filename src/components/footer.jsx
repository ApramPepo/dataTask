import * as React from 'react';
import tailwindcss from "tailwindcss";
import {Box, Typography, Link} from "@mui/material";


export default function Footer() {
    return(
        <Box direction="row" justify="center" alignItems="center" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center', backgroundColor: '#fff'}}>
            <Typography>
                ©2025 Abram A. |
            </Typography>
            <br/>
            <Typography>
                | Tech Stack: React, Vite, Material-UI, WeatherAPI
            </Typography>
        </Box>
    )
}