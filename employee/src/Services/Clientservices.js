import axios from 'axios'
const CLIENT_API_BASE_URL = "http://127.0.0.1:8000/api/clients";

class ClientService{

    getPorteurs(){
        return axios.get(CLIENT_API_BASE_URL);
    }
}
export default new ClientService();