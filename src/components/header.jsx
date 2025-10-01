import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

export default function Header() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Tabs aria-label="Centered tabs" defaultValue={0}>
                <TabList sx={{
                    width: '100vw',
                    justifyContent: 'center',
                }}>
                    <Tab><a href="#" style={{
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
                    }}>Home</a></Tab>
                    <Tab><a href="#" style={{
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
                    }}>About</a></Tab>
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
                    }}>Github</a></Tab>
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
                    }}>Linkedin</a></Tab>
                </TabList>
            </Tabs>
        </div>
    );
}