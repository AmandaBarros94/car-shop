import { Router } from 'express';
import CarController from '../controllers/Car.controller';
import CarModel from '../models/Car';
import CarService from '../services/Car.service';

const carRouter = Router();
const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carRouter.post('/', (_request, response) => carController.create(_request, response));

export default carRouter;