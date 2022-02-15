import client from "../http-common";

class ModelService {
  getAll(make: string) {
    return client.get(`/models?make=${make}`);
  }
}
export default new ModelService();
