import express, { Router } from 'express';

const app = express();
const port = 3000;

const user = Router();

app.use('/login', (res, req) => {
  res.send('Hello From Login !')
})

app.use('/', (req, res) => {
  res.send('Hello from express !');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
