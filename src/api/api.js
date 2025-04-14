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
    getUserCart: (id) => {
        return api.get('/cart?user_id=' + id);
    },
    addProductToUserWishlist: (user_id, product_id) => {
        return api.post('/like_product/', {'user_id':user_id, 'product_id':product_id});
    },
    removeProductToUserWishlist: (user_id, product_id) => {
        return api.post('/unlike_product/', {'user_id':user_id, 'product_id':product_id});
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