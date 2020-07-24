import * as express from 'express';
import { itemsRouter } from './routes/items.router';

const api = express();

api.use('/items', itemsRouter)

export default api;