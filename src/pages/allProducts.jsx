import '../App.css';
import Logo from "../media/product_sample.png"
import Product from "../components/product";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import sendRequest from "../api/api";

const products = [
    {
        id: 1,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 0,
        cost: 500,
        rating: 3.5,
        isLiked: false,
    },
    {
        id: 2,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 400,
        rating: 5.0,
        isLiked: false,
    },
    {
        id: 3,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 45,
        cost: 500,
        rating: 1.5,
        isLiked: false,
    },
    {
        id: 4,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 5,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 6,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 7,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },
    {
        id: 8,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },
];

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
    }, []);

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
