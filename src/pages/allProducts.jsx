import '../App.css';
import Product from "../components/product";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import sendRequest from "../api/api";


function Cart() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await sendRequest.getAllProducts()
                console.log("axios:", response);
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
        console.log(products)
    });

    return (
        <div className="page w-full p-20">
            <div className="flex justify-between items-center">
                <div className="text-xl">All Products</div>
                <Link to="/wishlist">
                    <button className="border border-opacity-50 border-black px-12 py-4 rounded">Whishlist</button>
                </Link>
            </div>
            <div className="wished-products-list flex w-full  flex-wrap justify-around">
                {products.map((product) => (
                    <Product Logo={product.image} reviews={product.rating} title={product.title} cost={product.cost}
                             discount={product.discount} isLiked={product.isLiked} showDel={false} key={product.id}
                             id={product.id}/>
                ))}
            </div>
        </div>
    );
}

export default Cart;
