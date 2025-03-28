import '../App.css';
import Logo from "../media/product_sample.png"
import CartProduct from "../components/cartProduct";
import CustomButton from "../components/customButton";
import {useState} from "react";
const productsList = [
    {
        id: 1,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 0,
        cost: 500,
        quantity: 5
    },
    {
        id: 2,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 400,
        quantity: 4
    },
    {
        id: 3,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 45,
        cost: 500,
        quantity: 8
    },
    {
        id: 4,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        quantity: 1
    },

    {
        id: 5,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        quantity: 5
    },

    {
        id: 6,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        quantity: 4
    },

    {
        id: 7,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        quantity: 4
    },
    {
        id: 8,
        image: Logo, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        quantity: 4
    },
];
function Cart() {
    const [products, setProducts] = useState(productsList);
    const [subtotal, setSubtotal] = useState(0);
    const UpdateSubTotal = () => {
        console.log("updateSubTotal called");
        let result = 0
        for (let i = 0; i < products.length; i++) {
            result += products[i].cost / 100 * (100 - products[i].discount)
        }
        setSubtotal(result);
    }

    const RemoveFromCart = (productID)=> {
        for (let i = 0; i < products.length; i++) {
            if(products[i].id === productID){
                products.splice(i, 1);
            }
        }
        setProducts(products);
        UpdateSubTotal()
    }

    return (
        <div className="page w-full p-20" >
            <div
                className="w-full bg-white border border-white rounded drop-shadow shadow-gray-400 my-3  px-8 py-6 flex flex-row justify-between items-center">
                <span className="w-1/5">Product</span>
                <span className="w-1/5">Price</span>
                <span className="w-1/5">Quantity</span>
                <span className="w-1/5">Subtotal</span>
            </div>
            <div className="wished-products-list flex w-full  flex-wrap justify-around" onChange={UpdateSubTotal}>
                {products.map((product) => (
                    <CartProduct  Logo={product.image} name={product.title} price={product.cost / 100 * (100 - product.discount)} quantity={product.quantity} key={product.id} id={product.id} products={products} setProducts={setProducts} RemoveFromCart={RemoveFromCart}/>
                ))}
            </div>
            <div className="flex justify-between items-center mt-8">
                <button className="border border-opacity-50 border-black px-12 py-4 rounded">Return To Shop</button>
                <button className="border border-opacity-50 border-black px-12 py-4 rounded" onClick={UpdateSubTotal}>Update Cart</button>
            </div>
            <div className="w-full my-16 flex flex-row justify-between items-center" >
                <div className="inline-flex flex-row w-1/2 items-center" >
                    <input type="text" placeholder="Coupon Code"  className="w-3/6 mx-2 border px-12 py-4 text-lg h-16"/>
                    <CustomButton className="w-2/6 my-3 px-12 py-1 h-16">Apply Coupon</CustomButton>
                </div>
                <div className="inline-flex w-full justify-end ">
                    <div className="p-6 bg-white drop-shadow rounded w-[470px] ">
                        <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-700">Subtotal:</span>
                            <span className="font-medium">${subtotal} </span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-700">Shipping:</span>
                            <span className="font-medium text-green-600">Free</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between text-lg font-bold mb-4">
                            <span>Total:</span>
                            <span>$1750</span>
                        </div>
                        <CustomButton className="my-3 px-12 py-1 h-16 w-full" >Proceed to checkout</CustomButton>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;
