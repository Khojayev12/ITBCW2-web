import '../App.css';
import {Link} from "react-router-dom";
import CustomInput from "./customInput";
import {useState} from "react";

function Footer() {
    const [email, setEmail] = useState("");
    return (
        <div className="footer bg-black text-white w-full py-10 px-20 flex justify-around">
            <div className="inline-flex flex-col items-start">
                <Link to="/" className="text-2xl font-bold mb-2">AnorPhone</Link>
                <div className="w-fit text-xl mb-2">Subscribe</div>
                <div className="w-fit text-xl mb-2">Get 10% off your first order</div>
                <CustomInput className="w-full h-[30px] bg-black outline-white border border-amber-50 text-white" placeholder="Enter your email" content={email} setContent={setEmail} />
            </div>
            <div className="inline-flex flex-col items-start">
                <div className="text-xl font-bold mb-2">Support</div>
                <div className="w-fit text-xl mb-2">Toshkent sh. Yangihayot,<br/>Sputnik16A.</div>
                <div className="w-fit text-xl mb-2">xojayevyoldoshbek@gmail.com</div>
                <div className="w-fit text-xl mb-2">+998 88 201 1557</div>
            </div>
            <div className="inline-flex flex-col items-start">
                <div className="text-xl font-bold mb-2">Account</div>
                <Link to="/profile" className="w-fit text-xl mb-2">My Account</Link>
                <div className="w-fit text-xl mb-2">
                    <Link to="/login" className="w-fit text-xl mb-2">Login </Link>
                    /
                    <Link to="/signup" className="w-fit text-xl mb-2"> Sign Up</Link>
                </div>
                <Link to="/cart" className="w-fit text-xl mb-2">Cart</Link>
                <Link to="/wishlist" className="w-fit text-xl mb-2">Wishlist</Link>
            </div>

        </div>
    );
}

export default Footer;
