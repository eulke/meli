import * as express from 'express';
import * as cors from 'cors';
import api from './app';

const app = express();
const port = process.env.port || 3333;

app.use(cors());

app.use('/api', api);

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
server.on('error', console.error);
