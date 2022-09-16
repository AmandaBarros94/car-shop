interface IVehicle {
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}
export default IVehicle;

export { IVehicle };