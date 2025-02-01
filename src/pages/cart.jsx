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
            <div className="flex justify-between items-center mt-8">
                <button className="border border-opacity-50 border-black px-12 py-4 rounded">Return To Shop</button>
                <button className="border border-opacity-50 border-black px-12 py-4 rounded">Update Cart</button>
            </div>
            <div className="w-full my-16 flex flex-row justify-between items-center" >
                <div className="inline-flex flex-row w-1/2 items-center" >
                    <input type="text" placeholder="Coupon Code" className="w-3/6 mx-2 border px-12 py-4"/>
                    <button
                        className="login-btn flex  text-lg  bg-c-button2 text-white rounded-sm w-2/6 my-3 px-12 py-4 items-center justify-center hover:bg-c-hover-button2">
                        Apply Coupon
                    </button>
                </div>
                <div className="inline-flex flex-end">
                    <div className="border border-black px-2 py-4" >
                        <div className="text-xl text-black">Cart Total</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;
