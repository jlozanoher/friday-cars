import client from "../http-common";

class MakeService {
  getAll() {
    return client.get("/makes");
  }

  // Add more methods here (POST, PUT, etc)
}
export default new MakeService();
