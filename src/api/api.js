import axios from "axios";
import config from "./config.js";

const api = axios.create({
    baseURL: config.baseURL
});

const sendRequest = {
    getAllProducts: () => {
        return api.get('/products');
    },
    getProductByUserId: (id) => {
        return api.get('/products?user_id=' + id);
    },
    getUserbyId: (id) => {
        return api.get('/users/' + id.toString());
    },
    getProductById: (id) => {
        return api.get('/products/' + id.toString());
    },
    login: (email, password) => {
        return api.post('/users/login', {"Email": email.toString(), "Password":password.toString()});
    },
    register: (name, email, password) => {
        return api.post('/users/create_user', {"Password":password.toString(), "Username":  name.toString(), "Name":"", "Surname": "", "Phone": "", "Email": email.toString(), });
    },
};

export default sendRequest;