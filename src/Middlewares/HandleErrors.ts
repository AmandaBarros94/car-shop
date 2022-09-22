import { NextFunction, Request, Response } from 'express';
import ErrorWithStatus from '../Error';

const HandleErrors = (
  err: ErrorWithStatus, 
  _request: Request,
  response: Response, 
  _next: NextFunction,
) => {
  const { status, error } = err as ErrorWithStatus;
  response.status(status || 500).json({ error });
};

export default HandleErrors;