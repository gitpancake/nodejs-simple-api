const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.get('/', (req, res) => {
	res.status(200).send('Success! Hello!');
});

app.get('/hello-world', (req, res) => {
	res.status(20).send('Hello World');
});

app.listen(PORT, () => {
	console.log(`Hosted on: http://localhost:${PORT}...`);
});
