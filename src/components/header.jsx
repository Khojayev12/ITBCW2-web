import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import '../App.css';
import '../styles/header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header w-full  px-20 py-5 flex-row flex justify-between border-b-2 border-opacity-20 border-black shadow-lg">
            <div className="header-logo text-3xl font-bold  inline-block  text-black  ">Exclusive</div>
            <div className="header-navigation text-3xl inline-flex items-center flex-row ">
                <div className="header-nav-single underline-hover-text text-xl inline-block mx-5  text-black" >
                    <Link to="/">Home</Link>
                </div>
                <div className="header-nav-single underline-hover-text text-xl inline-block mx-5 text-black" >
                    <Link to="/products">Products</Link>
                </div>
                <div className="header-nav-single underline-hover-text text-xl inline-block mx-5 text-black" >
                    <Link to="/about">About</Link>
                </div>
                <div className="header-nav-single underline-hover-text text-xl inline-block mx-5 text-black" >
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div className="header-nav-single underline-hover-text text-xl inline-block mx-5 text-black" >
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <div className="header-right inline-flex items-center " >
                <FaRegHeart className="inline-block  mx-2 text-xl" />
                <SlBasket className="inline-block  mx-2 text-xl"  />
            </div>
        </div>
    );
}

export default Header;
