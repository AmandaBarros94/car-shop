import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { car, carWithId } from '../../../tests/unit/mock/CarMock';

describe('Testing Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carWithId);
		sinon.stub(Model, 'findOne').resolves(carWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('If the creation of the car is a success', () => {
		it('Expected on success', async () => {
			const newCar = await carModel.create(car);
			expect(newCar).to.be.deep.equal(carWithId);
		});
	});

	describe('Searching for a car by id', () => {
		it('Expected on success', async () => {
			const carFound = await carModel.readOne('62cf1fc6498565d94eba52cd');
			expect(carFound).to.be.deep.equal(carWithId);
		});
	});


});