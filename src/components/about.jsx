import * as React from "react";
import {Box} from "@mui/material";


export default function About() {
    return (
        <Box className="about" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <h1><a target= "_blank" href="https://www.notion.so/Data-Task-Project-2925a75d4c788053956ae560ca23d1e6?source=copy_link" style={{ textDecoration: "none" }}>Notion Page</a></h1>
            <h1>About</h1>
            A react project gathering many productive elements to help user with planning and decision-making.

            <h3>I- Requirements:</h3>
            1-Header: Home - About - Github - Linkedin
            2-Weather: Small bar displaying current temperature (C and F) - today's weather - wind speed - location
            3-To do app: Gathers user data to add to list and manage it below the list
            a-Gather: ID(auto-generated) - Task name - Description - Date - Priority - Important - Repeat - Done
            b-Control: Edit - Delete
            4-Real-time clock: showing user's current time with the option to toggle 24h and 12h - User's region
            5-Footer: credit - tech stack

            <h3>II- Tools:</h3>
            1- React (vite)
            2- Use component library (Material UI - Shadcn UI)
            3- https://www.weatherapi.com/
            4- Git with Github
            5- Documentation with Notion and [README.md](http://readme.md/)
            6- State management: useState & useEffect
            7- WebStorm

            <h3>III- Details:</h3>
            An all-in-one solution to help with productivity. combining many of productivity planning needs to help manage and streamline workday & productivity planning.

            <h3>IV- Features:</h3>
            1- Real-time clock to help keep tracking of time.
            2- Weather forecast app to help with any case of emergency planning throughout the day.
            3- A full Todo app with management to add to remove tasks.
            4- Customization to work with 12 or 24 hour clocks - and same for Celsius to Fahrenheit for temperature.
            5- Simple usable design.

            <h3>V- Project Structure:</h3>
            dataTask > public && src && project files (.gitignore - license - package.json - etc…);
            src> assets && components && services && styles && utils

            <h3>VI- Dependencies installed:</h3>
            1- React initiated with Vite
            2- Material-MUI
            3- React Router

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>.</p>
        </Box>
    )
}