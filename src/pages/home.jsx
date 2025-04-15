import '../App.css';
import ps5 from "../media/ps5.jpg"
import sbuds from "../media/sbuds.jpg"
import HomeCarusel from "../components/homeCarusel";
import ProductsCarusel from "../components/productsCarusel";
import HomeSpecialProduct from "../components/homeSpecialProduct";
import {FaShippingFast, FaHeadset, FaShieldAlt} from "react-icons/fa";
import {useEffect, useState} from "react";
import sendRequest from "../api/api.js";


function Home(props) {
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

    return (<div className="page home py-12 px-24">
        <HomeCarusel/>
        <ProductsCarusel subtitle={"Today's"} title={"Flash Sales"} productList={products} tolink={"/products"} userID={props.userID} />
        <ProductsCarusel subtitle={"This Month"} title={"Best Selling Products"} productList={products}  tolink={"/products"} userID={props.userID}/>
        <HomeSpecialProduct/>
        <ProductsCarusel subtitle={"Our Products"} title={"Explore Our Products"} productList={products}  tolink={"/products"} userID={props.userID}/>
        <div>
            {/* Featured Title Section */}
            <div className="inline-flex flex-col justify-start my-12">
                <span className="inline-flex flex-row justify-start items-center">
                  <div className="w-5 h-10 bg-c-button2 inline-block"></div>
                  <span className="text-lg text-c-button2 font-semibold ml-4">Featured</span>
                </span>
                <div className="text-4xl font-semibold text-black mt-4">New Arrival</div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="relative col-span-1">
                    <img src={ps5} alt="PlayStation 5" className="w-full h-auto rounded-lg"/>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-semibold">PlayStation 5</h3>
                        <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                        <a href="/home" className="text-white underline mt-2 inline-block">Shop Now</a>
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-4">
                    <div
                        className="relative row-span-1 bg-black text-white p-6 rounded-lg flex flex-col justify-end">
                        <img src={sbuds} alt="PlayStation 5" className="w-full h-auto rounded-lg"/>
                        <h3 className="text-lg font-semibold">Women’s Collections</h3>
                        <p className="text-sm">Featured woman collections that give you another vibe.</p>
                        <a href="/home" className="text-white underline mt-2 inline-block">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-center gap-12 py-10 my-12">
            <div className="flex flex-col items-center text-center">
                <div
                    className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full border-4 border-gray-300">
                    <FaShippingFast size={28}/>
                </div>
                <h3 className="mt-4 text-lg font-semibold">FREE AND FAST DELIVERY</h3>
                <p className="text-gray-600 text-sm mt-2">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div
                    className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full border-4 border-gray-300">
                    <FaHeadset size={28}/>
                </div>
                <h3 className="mt-4 text-lg font-semibold">24/7 CUSTOMER SERVICE</h3>
                <p className="text-gray-600 text-sm mt-2">Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div
                    className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full border-4 border-gray-300">
                    <FaShieldAlt size={28}/>
                </div>
                <h3 className="mt-4 text-lg font-semibold">MONEY BACK GUARANTEE</h3>
                <p className="text-gray-600 text-sm mt-2">We return money within 30 days</p>
            </div>
        </div>
    </div>);
}

export default Home;
