import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(

    _request: Request & { body: ICar }, 
    response: Response<ICar>,
  ) {
    const results = await this._service.create(_request.body);
    return response.status(201).json(results);
  }

  public async read(

    _request: Request, 
    response: Response<ICar[]>,
  ) {
    const results = await this._service.read();
    return response.status(200).json(results);
  }
}

export default CarController;