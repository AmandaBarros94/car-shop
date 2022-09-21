import {
  NextFunction,
  Request,
  Response,
} from 'express';
import Joi from 'joi';
import ErrorWithStatus from '../Error';

const productSchema = Joi.object({
  model: Joi.string().min(3).required(),
  year: Joi.number().min(1900).max(2022),
  color: Joi.string().min(3).required(),
  status: Joi.boolean(),
  buyValue: Joi.number(),
  doorsQty: Joi.number().min(2).max(4).required(),
  seatsQty: Joi.number().min(2).max(7).required(),
});
const CarValidator = (
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  const { error } = productSchema.validate(_request.body);
  if (error) {
    throw new ErrorWithStatus(error.details[0].message);
  }
  next();
};
export default CarValidator;