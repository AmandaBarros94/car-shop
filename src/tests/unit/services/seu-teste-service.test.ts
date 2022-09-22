import { expect } from 'chai';
import * as sinon from 'sinon';
import ErrorWithSatatus from '../../../Error';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car.service';
import { carWithId, car } from '../../unit/mock/CarMock';

describe('Testing Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, 'create').resolves(carWithId);
    sinon.stub(carModel, 'readOne').resolves(carWithId);
  })

  after(() => {
    sinon.restore()
  })

  describe('If the creation of the car is a success', () => {
    it('Expected on success', async () => {
      const carCreated = await carService.create(car);
      expect(carCreated).to.be.deep.equal(carWithId);
    });

    it('Expected on failed', async () => {
      try {
        await carService.create({} as any);
      } catch (error) {
        expect(error).to.be.instanceOf(ErrorWithSatatus);
      }
    });
  });
  describe('Searching for a car by id', () => {
    it('Expected on success', async () => {
      const carFound = await carService.readOne('62cf1fc6498565d94eba52cd');
      expect(carFound).to.be.deep.equal(carWithId);
    });

  });
});