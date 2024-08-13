import React, { useState } from 'react';
import './ReplyBox.css'; // Make sure the path is correct
import axios from 'axios';
import { Button, TextField } from '@mui/material';

const ReplyBox = ({ thread_id }) => {
    const [body, setBody] = useState('');

    const sendReply = () => {
        axios.post(`/reply/${thread_id}`, {
            from: 'user@example.com', // You can replace this with dynamic data as needed
            to: 'recipient@example.com', // Replace with actual recipient email
            subject: 'Re: Subject', // Set the subject dynamically if needed
            body: `<html>${body}</html>`,
        })
        .then(() => {
            // Handle successful reply, e.g., display a success message or clear the form
            setBody(''); // Clear the input after sending the reply
        })
        .catch(error => {
            // Handle any errors that occur during the request
            console.error("There was an error sending the reply:", error);
        });
    };

    return (
        <div className="replybox-container">
            <TextField
                label="Reply"
                multiline
                rows={4}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                fullWidth
                className="replybox-textfield"
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={sendReply}
                className="replybox-button"
            >
                Send Reply
            </Button>
        </div>
    );
};

export default ReplyBox;
