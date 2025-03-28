import '../App.css';
import {FaRegHeart} from "react-icons/fa6";
import {SlBasket} from "react-icons/sl";
import {ImBin} from "react-icons/im";
import ProductReview from "./productReviews";
import {useState} from "react";
import {Link} from "react-router-dom";

function Product(props) {
    const [isLiked, setIsLiked] = useState(props.isLiked);

    const HandleLiked = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div
            className="product group  w-[270px] h-[350px] relative inline-block m-7 rounded-b-lg  transition-all duration-300 ">
            <div
                className="product-image w-[270px] h-[250px] group-hover:h-[214px] bg-c-secondary m-0 p-0 flex justify-center items-center rounded-b-lg transition-all duration-300">
                <img
                    src={props.Logo}
                    alt=""
                    className="w-[190px] h-[180px] rounded-b-lg transition-all duration-300"
                />
            </div>
            <div
                className="product-add-cart bg-black h-0 text-white flex justify-center items-center overflow-hidden  group-hover:h-[36px] group-hover:bg-black transition-all duration-300 cursor-pointer">
                <SlBasket
                    className="my-1 hidden group-hover:mx-3 group-hover:inline-block transition-all duration-300"/>
                Add to cart
            </div>
            <div className="product-name text-lg mt-2">
                <Link to={"/product/" + props.id}>
                    {props.title}
                </Link>
            </div>
            <div className="product-cost">
                <span className="text-lg text-c-button2">${props.cost / 100 * (100 - props.discount)}</span>
                <span className="text-lg mx-3 text-gray-500"><s>${props.cost}</s></span>
            </div>
            <div className="product-reviews mt-1">
                <ProductReview score={props.reviews}/>
            </div>
            <div
                className="product-sale bg-c-button2 rounded text-white text-xs px-3 py-1 w-fit absolute top-3 left-3">-{props.discount}%
            </div>
            <div
                className="product-like-btn w-8 h-8 bg-white absolute top-3 right-3 flex justify-center items-center rounded-2xl"
                onClick={HandleLiked}>
                <FaRegHeart className={isLiked ? "text-red-600" : " hover:text-red-600"}/>
            </div>
            <div
                className={props.showDel === false ? "hidden" : "product-like-btn w-8 h-8 bg-white absolute top-3 right-3 flex justify-center items-center rounded-2xl"}>
                <ImBin className="hover:text-red-600"/>
            </div>
        </div>
    );
}

export default Product;













