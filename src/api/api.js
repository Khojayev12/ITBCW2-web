import axios from "axios";
import config from "./config.js";

const api = axios.create({
    baseURL: config.baseURL
});

const sendRequest = {
    getAllProducts: () => {
        return api.get('/products');
    },
    getProductById: (id) => {
        return api.get('/' + id);
    },
    getUserbyId: (id) => {
        return api.get('/users/' + id.toString());
    },
};

export default sendRequest;