import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Clock from './clock.jsx';
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Tabs aria-label="Centered tabs" defaultValue={0}>
                <Clock />
                <TabList style={{
                    width: '100vw',
                    justifyContent: 'center',
                }}>
                    <Tab><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Home
                    </Link></Tab>
                    <Tab><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}> {/* ✅ FIXED */}
                        About
                    </Link></Tab>
                    <Tab><a target="_blank" href="https://github.com/ApramPepo" style={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }} sx={{
                        '&:visited': {
                            color: '#333',
                        },
                        '&:hover': {
                            color: '#ccc',
                        },
                        '&:active': {
                            color: '#333',
                        }
                    }}>Github <img width="10px" src="https://img.icons8.com/?size=100&id=12599&format=png&color=228BE6" alt="Github logo"/></a></Tab>
                    <Tab><a target="_blank" href="https://www.linkedin.com/in/abramadel/" style={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }} sx={{
                        '&:visited': {
                            color: '#333',
                        },
                        '&:hover': {
                            color: '#ccc',
                        },
                        '&:active': {
                            color: '#333',
                        }
                    }}>Linkedin <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=228BE6" alt="Linkedin Logo" width="10px"/></a></Tab>
                </TabList>
            </Tabs>
        </div>
    );
}