import '../App.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import {ImBin} from "react-icons/im";

function CartProduct(props) {
    const [quantity, setQuantity] = useState(props.quantity);

    // Handler for input change
    const onChangeHandler = (e) => {
        const newQuantity = parseInt(e.target.value, 10); // Convert input value to a number
        if (!isNaN(newQuantity) && newQuantity >= 1) { // Ensure quantity is a valid number and >= 1
            setQuantity(newQuantity); // Update local state
        }
    };

    return (
        <div className="cart-product w-full bg-white border border-white rounded drop-shadow shadow-gray-400 my-3 px-8 py-6 flex flex-row justify-between items-center">
            <div className="inline-flex flex-row items-center w-1/5">
                <img className="w-9 h-9 inline-block" src={props.Logo} alt="" />
                <div className="ml-2 text-lg">{props.name}</div>
            </div>
            <div className="inline-flex flex-row items-center w-1/5">${props.price}</div>
            <div className="inline-flex flex-row items-center w-1/5"><input className="w-16 border border-gray-400 rounded p-1" value={props.quantity} onChange={onChangeHandler} type="number" id="points" name="points" step="1"/></div>
            <div className="inline-flex flex-row items-center w-1/5">${props.price * quantity}</div>
            <div className="inline-flex w-8 h-8 bg-white absolute top-1/3 right-8 justify-center items-center rounded-2xl drop-shadow shadow-gray-400 transition-all hover:bg-c-button2 hover:text-white hover:scale-125"><ImBin/></div>
        </div>
    );
}

export default CartProduct;
