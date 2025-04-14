import '../App.css';
import Product from "../components/product";
import Logo from "../media/product_sample.png"
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import sendRequest from "../api/api";
const products = [
    {
        id: 1,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 0,
        cost: 500,
        rating: 3.5
    },
    {
        id: 2,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 400,
        rating: 5.0
    },
    {
        id: 3,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 45,
        cost: 500,
        rating: 1.5
    },
    {
        id: 4,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5
    },

    {
        id: 5,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5
    },

    {
        id: 6,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5
    },

    {
        id: 7,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5
    },
    {
        id: 8,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5
    },
];
function Wishlist(isLoggedIn, setIsLoggedIn) {
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
    }, [navigate]);
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
