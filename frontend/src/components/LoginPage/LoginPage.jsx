import React from 'react';
import './LoginPage.css';
import { Button, TextField, Container, Typography } from '@mui/material';

const LoginPage = () => {
    const handleLogin = () => {
        // Authentication logic
    };

    return (
        <Container className="login-container">
            <div className="login-box">
                <Typography variant="h4" gutterBottom className="login-title">
                    Login
                </Typography>
                <TextField label="Email" fullWidth margin="normal" />
                <TextField label="Password" type="password" fullWidth margin="normal" />
                <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
                    Login
                </Button>
            </div>
        </Container>
    );
};

export default LoginPage;
