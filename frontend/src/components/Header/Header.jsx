import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <AppBar position="static" className="header-appbar">
            <Toolbar className="header-toolbar">
                <Typography variant="h6" className="header-title">
                    ReachInbox
                </Typography>
                <IconButton edge="end" color="inherit" onClick={toggleDarkMode}>
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
