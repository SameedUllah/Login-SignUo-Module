import express from 'express';
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});

app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}`);
});
