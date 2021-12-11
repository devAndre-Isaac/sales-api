import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
