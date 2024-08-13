import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OneBoxPage.css';
import { Container, List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import ReplyBox from '../../components/ReplyBox/ReplyBox.jsx';
import TextEditor from '../../components/TextEditor/TextEditor.jsx';

const OneBoxPage = () => {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        axios.get('/onebox/list').then((response) => {
            setThreads(response.data);
        });
    }, []);

    const deleteThread = (id) => {
        axios.delete(`/onebox/${id}`).then(() => {
            setThreads(threads.filter(thread => thread._id !== id));
        });
    };

    return (
        <Container className="onebox-container">
            <Typography variant="h4" className="onebox-title">
                Inbox
            </Typography>
            <List className="onebox-list">
                {threads.map(thread => (
                    <ListItem key={thread._id} className="onebox-list-item">
                        <ListItemText primary={thread.subject} />
                        <Button className="delete-button" onClick={() => deleteThread(thread._id)}>Delete</Button>
                        <ReplyBox thread_id={thread._id} />
                    </ListItem>
                ))}
            </List>
            <TextEditor />
        </Container>
    );
};

export default OneBoxPage;
