import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';
import ErrorWithStatus from '../Error';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar> {
    const theCar = await this._car.readOne(_id);
    if (!theCar) {
      throw new ErrorWithStatus('Object not found', 404);
    }
    return theCar;
  }

  public async update(_id: string, body: ICar): Promise<ICar | null> {
    await this._car.readOne(_id);

    const carUpdated = await this._car.update(_id, body);

    return carUpdated;
  }
}
export default CarService;