const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/new-message', (req, res) => {
    const { message } = req.body;

    if (!message || message.text.toLowerCase().indexOf('alfred') < 0) {
        return res.end();
    }

    axios.post('https://api.telegram.org/bot1585744368:AAHvT28IMI9VltL9mHZS7iZXn2XvfmNcYRA/sendMessage', {
        chat_id: message.chat.id,
        text: 'Hi my name is Alfred. How may I help you?'
    }).then((response) => {
        console.log('Message posted.');
        res.end('OK.');
    }).catch((err) => {
        console.log('Error: ', err);
        res.end('Error: ', err);
    });
});

const port = process.env.PORT || 3600;

app.listen(port, () => {
    console.log('Telegram App is running on port ' + port);
});