import * as itemsService from '../services/items.service';
import { Request, Response, NextFunction } from 'express';

export const search = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const response = await itemsService.search(req);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { params } = req;
    const response = await itemsService.getById(params['id']);

    return res.json(response);
  } catch (error) {
    return next(error);
  }
};
