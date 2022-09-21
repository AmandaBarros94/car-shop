import { NextFunction, Request, Response } from 'express';
import ErrorWithStatus from '../Error';

const handleErrors = (
  err: ErrorWithStatus, 
  request: Request,
  response: Response, 
  _next: NextFunction,
) => {
  const { status, message } = err as ErrorWithStatus;
  response.status(status || 500).json({ message });
};

export default handleErrors;