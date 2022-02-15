import client from "../http-common";

class VehicleService {
  getAll(make: string, model: string) {
    return client.get(`/vehicles?make=${make}&model=${model}`);
  }
}
export default new VehicleService();
