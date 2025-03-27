import '../App.css';
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
        for (let i = 0; i < props.products.length; i++) {
            if(props.products[i].id === props.id){
                props.products[i].quantity = newQuantity;
                props.setProducts(props.products);
            }
        }
    };

    const Remove = () => {
        props.RemoveFromCart(props.id);
    }

    return (
        <div className="cart-product w-full bg-white border border-white rounded drop-shadow shadow-gray-400 my-3 px-8 py-6 flex flex-row justify-between items-center relative">
            <div className="inline-flex flex-row items-center w-1/5">
                <img className="w-9 h-9 inline-block" src={props.Logo} alt="" />
                <div className="ml-2 text-lg">{props.name}</div>
            </div>
            <div className="inline-flex flex-row items-center w-1/5">${props.price}</div>
            <div className="inline-flex flex-row items-center w-1/5"><input min="1" className="w-20 border border-gray-400 rounded p-1" value={quantity} onChange={onChangeHandler} type="number" id="points" name="points" step="1"/></div>
            <div className="inline-flex flex-row items-center w-1/5">${props.price * quantity}</div>
            <div className="inline-flex w-8 h-8 bg-white absolute top-1/3 right-8 justify-center items-center rounded-2xl drop-shadow shadow-gray-400 transition-all hover:bg-c-button2 hover:text-white hover:scale-125">
                <ImBin onClick={Remove} />
            </div>
        </div>
    );
}

export default CartProduct;
