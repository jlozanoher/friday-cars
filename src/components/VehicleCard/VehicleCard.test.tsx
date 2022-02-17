import renderer from "react-test-renderer";
import Vehicle from "../../models/vehicle.model";
import VehicleCard from "./VehicleCard";

const vehicle: Vehicle = {
  id: "1",
  make: "BMW",
  model: "3er",
  bodyType: "Kombi",
  engineCapacity: 1995,
  enginePowerPS: 190,
  enginePowerPW: 300,
  fuelType: "Diesel",
};

test("VehicleCard should match snap", () => {
  const tree = renderer.create(<VehicleCard vehicle={vehicle} />).toJSON();
  expect(tree).toMatchSnapshot();
});
