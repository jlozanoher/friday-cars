import renderer from "react-test-renderer";
import { WithReduxContext } from "../../helpers/test-utils/WithReduxContext";
import Vehicle from "../../models/vehicle.model";
import VehicleDetails from "./VehicleDetails";

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

describe("VehicleDetails should match snap", () => {
  it("VehicleDetails normal", () => {
    const tree = renderer
      .create(
        <WithReduxContext>
          <VehicleDetails vehicle={vehicle} />
        </WithReduxContext>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("VehicleDetails selected", () => {
    const tree = renderer
      .create(
        <WithReduxContext>
          <VehicleDetails vehicle={vehicle} selected />
        </WithReduxContext>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
