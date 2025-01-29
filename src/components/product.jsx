import '../App.css';
import {FaRegHeart} from "react-icons/fa6";
import {SlBasket} from "react-icons/sl";

function Product(props) {
    return (
        <div className="product border w-[270px] h-[350px] relative inline-block m-10">
            <div className="product-image w-[270px] h-[250px] bg-c-secondary m-0 p-0 flex justify-center items-center">
                <img src={props.Logo} alt="" className="w-[190px] h-[180px]"/>
            </div>
            <div className="product-name text-lg mt-4" >Gamepad</div>
            <div className="product-cost">
                <span className="text-lg text-c-button2 ">$120</span>
                <span className="text-lg mx-3 text-gray-500">$160</span>
            </div>
            <div className="product-reviews">review</div>
            <div className="product-sale bg-c-button2 rounded text-white text-xs px-3 py-1 w-fit absolute top-3 left-3" >-40%</div>
            <div className="product-like-btn w-8 h-8 bg-white absolute top-3 right-3 flex justify-center items-center rounded-2xl">
                <FaRegHeart/>
            </div>
            <div className="product-like-btn w-8 h-8 bg-white absolute top-12 right-3 flex justify-center items-center rounded-2xl">
                <SlBasket/>
            </div>

        </div>
    );
}

export default Product;
