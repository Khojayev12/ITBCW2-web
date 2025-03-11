import '../App.css';
import { FaStar, FaRegStar } from "react-icons/fa";

function ProductReview(props) {
    return (
        <div
            className="product-review flex flex-row">
            {props.score > 0.5? (
                <FaStar  className="text-xl text-yellow-500 " />
            ):(
                <FaRegStar  className="text-xl text-black " />
            )}
            {props.score > 1.5? (
                <FaStar  className="text-xl text-yellow-500 " />
            ):(
                <FaRegStar  className="text-xl text-black " />
            )}
            {props.score > 2.5? (
                <FaStar  className="text-xl text-yellow-500 " />
            ):(
                <FaRegStar  className="text-xl text-black " />
            )}
            {props.score > 3.5? (
                <FaStar  className="text-xl text-yellow-500 " />
            ):(
                <FaRegStar  className="text-xl text-black " />
            )}
            {props.score > 4.5? (
                <FaStar  className="text-xl text-yellow-500 " />
            ):(
                <FaRegStar  className="text-xl text-black " />
            )}
        </div>
    );
}

export default ProductReview;













