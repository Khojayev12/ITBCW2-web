import { FaRegHeart } from "react-icons/fa6";
import '../App.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header w-full  px-20 py-5 flex-row flex justify-between bg-blue-300">
            <div className="header-logo text-3xl  inline-block  text-black bg-red-300 ">Exclusive</div>
            <div className="header-navigation text-3xl inline-block flex-row bg-yellow-300">
                <div className="header-nav-single text-xl inline-block mx-5 text-black" >
                    <Link to="/">Home</Link>
                </div>
                <div className="header-nav-single text-xl inline-block mx-5 text-black" >
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="header-nav-single text-xl inline-block mx-5 text-black" >
                    <Link to="/about">About</Link>
                </div>
                <div className="header-nav-single text-xl inline-block mx-5 text-black" >
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
            <div className="header-right inline-block bg-green-300" ><FaRegHeart className="inline-block" /></div>
        </div>
    );
}

export default Header;
