import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());  // Parse JSON payloads
// Webhook test commit - Added a comment
// GitHub webhook endpoint
app.post('/webhook/github', (req, res) => {
    console.log('✅ Webhook received from GitHuwwwwb');
    console.log('🔎 Commit Data:', JSON.stringify(req.body, null, 2));

    res.status(200).send('Webhook received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Webhook server running on port ${PORT}`);
});
