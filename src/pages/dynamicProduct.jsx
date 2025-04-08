import '../App.css';
import DeliveryLogo from "../media/icon-delivery.svg"
import ReturnLogo from "../media/Icon-return.svg"
import ProductReview from "../components/productReviews";
import CustomButton from "../components/customButton";
import {useEffect, useState} from "react";
import {FaRegHeart} from "react-icons/fa6";
import OtherProductsCarusel from "../components/otherProductsCarusel";
import Logo from "../media/product_sample.png";
import sendRequest from "../api/api";

const products = [
    {
        id: 1,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 0,
        cost: 500,
        rating: 3.5,
        isLiked: false,
    },
    {
        id: 2,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 400,
        rating: 5.0,
        isLiked: false,
    },
    {
        id: 3,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 45,
        cost: 500,
        rating: 1.5,
        isLiked: false,
    },
    {
        id: 4,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 5,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 6,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
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

const productDetails = [
    {
        id: 1,
        image1: Logo,
        image2: Logo,
        image3: Logo,
        image4: Logo,
        image5: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        discount: 0,
        cost: 500,
        rating: 4.0,
        ratingCount: 154,
        isInStock: true,
        colors: ["red", "green", "blue"],
        storage: ["128GB", "256GB", "512GB"],
        isLiked: false,
    }
];

function DynamicProduct(props) {
    const [productDetails, setProductDetails] = useState([])
    const [products, setProducts] = useState([]);
    const [storage, setStorage] = useState([""]);
    const [colors, setColors] = useState([""]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await sendRequest.getProductById(props.id)
                //console.log("axios:", response);
                setProductDetails(response.data);

                setProductCount(1);

                console.log("colors:    ", response.data.colors)
                setIsLiked(response.data.isLiked);
                setColors(response.data.colors);
                setStorage(response.data.storage);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
        console.log(productDetails)

        const fetchOtherProductsData = async () => {
            try {
                const response = await sendRequest.getAllProducts()
                //console.log("axios:", response);
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchOtherProductsData();
        console.log(products)
    }, []);

    const [productCount, setProductCount] = useState(1);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedStorage, setSelectedStorage] = useState("");
    const [isLiked, setIsLiked] = useState(false);
    var state = productDetails.isInStock
    const PlusProductCount = () => {
        setProductCount(productCount + 1)
    }
    const MinusProductCount = () => {
        setProductCount(productCount - 1)
    }
    const HandleLiked = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className="page DynamicProduct">
            <div className={"p-16"}>
                <div className={"product-hero flex flex-row justify-center w-full"}>
                    <div className={"product-photos w-[686px] flex flex-row"}>
                        <div className={"w-[170px] mr-4"}>
                            <img src={productDetails.image1} alt=""
                                 className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                            <img src={productDetails.image2} alt=""
                                 className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                            <img src={productDetails.image3} alt=""
                                 className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                            <img src={productDetails.image4} alt=""
                                 className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                        </div>
                        <div className={"w-3/4"}>
                            <img src={productDetails.image5} alt="" className={"bg-gray-100 w-[500px] h-[600px]"}/>
                        </div>
                    </div>
                    <div className={"product-info w-1/3 ml-4"}>
                        <div className={"p-title text-2xl text-black font-semibold"}>{productDetails.title}</div>
                        <div className={"text-lg my-4 text-gray-500 flex flex-row"}>
                            <ProductReview score={productDetails.rating}/> ({productDetails.ratingCount} Reviews)
                            | {state ? <span className={"text-lg text-green-500 opacity-60"}>In Storck</span> :
                            <span className={"text-lg text-red-500 opacity-60"}>Out of Storck</span>}
                        </div>
                        <div className={"p-cost  my-4 text-2xl text-black"}>${productDetails.cost}</div>
                        <div className={"p-description  my-1 text-lg"}>{productDetails.description}</div>
                        <hr/>
                        <div className={"text-xl  my-4"}>
                            <div className="flex items-center space-x-3">
                                <span className="text-xl">Colours:</span>
                                <div className="flex space-x-2">
                                    {colors.map((color, index) => (
                                        <button
                                            key={index}
                                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                                selectedColor === color ? "border-black" : "border-transparent"
                                            }`}
                                            onClick={() => setSelectedColor(color)}
                                        >
                                            <div
                                                className="w-4 h-4 rounded-full"
                                                style={{backgroundColor: color}}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={"text-xl  my-4 flex flex-row align-middle"}>
                            Storage:
                            {storage.map((storage, index) => (
                                <div
                                    className={"inline-block ml-4 h-8 px-2 rounded border border-gray-500 text-lg text-center cursor-pointer" + (selectedStorage === storage ? " bg-c-button2 text-white" : "")}
                                    onClick={() => setSelectedStorage(storage)}>{storage}</div>
                            ))}
                        </div>
                        <div className={"my-4 flex flex-row"}>
                            <button
                                className={"border border-gray-500 rounded-l w-10 h-11 inline-flex justify-center items-center hover:bg-c-button2 hover:text-white"}
                                onClick={MinusProductCount}>-
                            </button>
                            <div
                                className={"border-t border-b border-gray-500 w-20 h-11 inline-flex justify-center items-center"}>{productCount}</div>
                            <button
                                className={"border border-c-button2 rounded-r w-10 h-11 inline-flex justify-center items-center bg-c-button2 text-white"}
                                onClick={PlusProductCount}>+
                            </button>
                            <CustomButton className={"inline-block ml-4 w-40 h-[44px] rounded-l rounded-r "}>Buy
                                Now</CustomButton>
                            <div
                                className={"product-p-like-btn group border rounded-l rounded-r border-gray-500 w-10 h-11 inline-flex justify-center items-center ml-6 hover:bg-red-500" + (isLiked ? " bg-red-500" : "")}
                                onClick={HandleLiked}>
                                <FaRegHeart className={"group-hover:text-white" + (isLiked ? " text-white" : "")}/>
                            </div>
                        </div>
                        <div className={"mt-4 flex flex-col border border-gray-500 rounded-t px-4 py-6"}>
                            <div className={"flex flex-row"}>
                                <img src={DeliveryLogo} alt=""/>
                                <div className={"text-lg ml-4 font-medium"}>Free Delivery <br/><span
                                    className={"text-xs font-medium"}>Enter your postal code for Delivery Availability</span>
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-col border-b border-l border-r border-gray-500 rounded-b px-4 py-6"}>
                            <div className={"flex flex-row"}>
                                <img src={ReturnLogo} alt=""/>
                                <div className={"text-lg ml-4 font-medium"}>Return Delivery <br/><span
                                    className={"text-xs font-medium"}>Free 30 Days Delivery Returns</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <OtherProductsCarusel title={'Related Items'} productList={products} tolink={"/products"}/>
            </div>
        </div>
    );
}

export default DynamicProduct;
