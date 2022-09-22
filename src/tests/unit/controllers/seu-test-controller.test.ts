import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import { car, carWithId } from '../../unit/mock/CarMock';
import CarController from '../../../controllers/Car.controller';
import CarService from '../../../services/Car.service';
import CarModel from '../../../models/Car';


describe('Testing Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const _request = {} as Request;
  const response = {} as Response;

  before(() => {
    sinon.stub(carService, 'create').resolves(carWithId);

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns(response);
  });

  after(() => {
    sinon.restore()
  })

  describe('if the creation of the car is a success ', () => {
    it('Expected on success', async () => {
      _request.body = car;
      await carController.create(_request, response);

      expect((response.status as sinon.SinonStub)
        .calledWith(201)).to.be.true;

      expect((response.json as sinon.SinonStub)
        .calledWith(carWithId)).to.be.true;
    });
  });
})