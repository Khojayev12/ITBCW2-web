import '../App.css';
import Product from "../components/product";
import Logo from "../media/login.png"
import CartProduct from "../components/cartProduct";

function Cart() {
    return (
        <div className="page w-full p-20">
            <div
                className="w-full bg-white border border-white rounded drop-shadow shadow-gray-400 my-3  px-8 py-6 flex flex-row justify-between items-center">
                <span className="w-1/5">Product</span>
                <span className="w-1/5">Price</span>
                <span className="w-1/5">Quantity</span>
                <span className="w-1/5">Subtotal</span>
            </div>
            <div className="wished-products-list flex w-full  flex-wrap justify-around">
                <CartProduct Logo={Logo} name={"LCD Monitors"} price={650} quantity={1} />
                <CartProduct Logo={Logo} name={"LCD Monitors"} price={650} quantity={2} />
                <CartProduct Logo={Logo} name={"LCD Monitors"} price={650} quantity={1} />
                <CartProduct Logo={Logo} name={"LCD Monitors"} price={650} quantity={5} />
            </div>
            <div className="flex justify-between items-center">
                <div className="text-xl">Wishlist(4)</div>
                <button className="border border-opacity-50 border-black px-12 py-4 rounded">Move all to Bag</button>
            </div>


        </div>
    );
}

export default Cart;
