const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Example Routes
app.get('/onebox/list', (req, res) => {
    // Logic for fetching the list
});

app.get('/onebox/:thread_id', (req, res) => {
    // Logic for fetching specific thread details
});

app.delete('/onebox/:thread_id', (req, res) => {
    // Logic for deleting a thread
});

app.post('/reply/:thread_id', (req, res) => {
    // Logic for sending a reply
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
