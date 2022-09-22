import { Router } from 'express';
import CarController from '../controllers/Car.controller';
import { CarValidator, IdValidator } from '../Middlewares';
import CarModel from '../models/Car';
import CarService from '../services/Car.service';

const carRouter = Router();
const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRouter.post(
  '/',
  CarValidator,
  (_request, response) => carController.create(_request, response),
);

carRouter.get(
  '/', 
  (_request, response) => carController.read(_request, response),
);
carRouter.get(
  '/:id',
  IdValidator,
  (_request, response) => carController.readOne(_request, response),
);
export default carRouter;