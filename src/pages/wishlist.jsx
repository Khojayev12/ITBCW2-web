import '../App.css';
import Product from "../components/product";
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import sendRequest from "../api/api";

function Wishlist(isLoggedIn) {
    const [products, setProducts] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            // If user is not logged in, redirect to the login page
            navigate('/login');
        }
        const fetchData = async () => {
            try {
                const response = await sendRequest.getProductByUserId(2)
                console.log("axios:", response);
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    });
    return (
        <div className="page w-full p-20">
            <div className="flex justify-between items-center">
                <div className="text-xl" >Wishlist({products.length})</div>
                <button className="border border-opacity-50 border-black px-12 py-4 rounded" >Move all to Bag</button>
            </div>
            <div className="wished-products-list flex w-full  flex-wrap justify-around" >
                {products.map((product) => (
                    <Product Logo={product.image} reviews={product.rating} title={product.title} cost={product.cost} discount={product.discount} isLiked={'F'} key={product.id} />
                ))}
            </div>


        </div>
    );
}

export default Wishlist;
