import { NextFunction, Request, Response } from 'express';
import ErrorWithStatus from '../Error';

const IdValidator = (
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  const { id } = _request.params;
  if (!id) {
    throw new ErrorWithStatus('Id must have 24 hexadecimal characters');
  }
  if (id.length !== 24) {
    throw new ErrorWithStatus('Id must have 24 hexadecimal characters');
  }
  next();
};

export default IdValidator;