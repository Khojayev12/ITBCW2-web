import '../App.css';
import {Link} from "react-router-dom";
import Logo from '../media/login.png'

function Signup() {
    return (
        <div className="login w-full  px-20 py-5 h-full flex justify-center items-center">
            <div className="login-left w-8/12 h-full ">
                <img src={Logo} alt="" className="login-logo w-11/12 "/>
            </div>
            <div className="login-right w-4/12  h-full inline-flex justify-center items-center flex-col">
                <div className="login-title text-3xl block mb-4">Sign Up to Exclusive</div>
                <input type="tet" placeholder="name"
                       className="block h-10 text-l p-3 border-c-button2 text-c-button2 border-2 outline-0 rounded-sm w-8/12 my-3 placeholder:text-gray-500"/>
                <input type="email" placeholder="email"
                       className="block h-10 text-l p-3 border-c-button2 text-c-button2 border-2 outline-0 rounded-sm w-8/12 my-3 placeholder:text-gray-500"/>
                <input type="address" placeholder="address"
                       className="block h-10 text-l p-3 border-c-button2 text-c-button2 border-2 outline-0 rounded-sm w-8/12 my-3 placeholder:text-gray-500"/>
                <input type="password" placeholder="password"
                       className="block h-10 text-l p-3 border-c-button2 text-c-button2 border-2 outline-0 rounded-sm w-8/12 my-3 placeholder:text-gray-500"/>
                <input type="password" placeholder="re-enter password"
                       className="block h-10 text-l p-3 border-c-button2 text-c-button2 border-2 outline-0 rounded-sm w-8/12 my-3 placeholder:text-gray-500"/>
                <button
                    className="login-btn flex h-10 text-l p-3 bg-c-button2 text-white rounded-sm w-8/12 my-3 items-center justify-center hover:bg-c-hover-button2">
                    Sign Up
                </button>
                <div className="login-reg text-l text-gray-500">Already have an account?</div>
                <div className="login-redirect text-l text-c-button2 underline">
                    <Link to='/login' className="no-underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
