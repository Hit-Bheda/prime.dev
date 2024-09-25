import { Request, Response, NextFunction } from "express";
import { Handler } from "../types/types.ts";

const tryCatch = (content: Handler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await content(req, res);
  } catch (error) {
    return next(error);
  }
};

export default tryCatch;
