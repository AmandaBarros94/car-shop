import ICar from '../../../interfaces/ICar';

const car: ICar = {
  model: 'Ford',
  year: 2020,
  color: 'Black', 
  status: true,
  buyValue: 100000, 
  doorsQty: 4,  
  seatsQty: 5,  
};

const carWithId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Ford',
  year: 2020,
  color: 'Black', 
  status: true,
  buyValue: 100000, 
  doorsQty: 4,  
  seatsQty: 5,  
};

export { 
  car, 
  carWithId,
}