import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.json());  // Parse JSON payloads
// Webhook test commit - Added a comment
// GitHub webhook endpoint
app.post('/webhook/github', (req, res) => {
    console.log('Received webhook:', req.body);
    res.status(200).send('Webhook sssss');
});

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`🚀 Webhook server running on port ${PORT}`);
});
