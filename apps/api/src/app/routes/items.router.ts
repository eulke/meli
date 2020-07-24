import { Router } from 'express';
import { search, getById } from '../controllers/items.controller';

export const itemsRouter = Router();

itemsRouter.get('/', search);
itemsRouter.get('/:id', getById);
