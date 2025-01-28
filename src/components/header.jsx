import '../App.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header w-full bg-blue-500 px-20 py-5 flex-row justify-between">
            <div className="header-logo text-3xl  inline-block  text-black ">Exclusive</div>
            <div className="header-navigation text-3xl inline-block flex-row">
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
            <div className="header-right inline-block" >right</div>
        </div>
    );
}

export default Header;
