import '../App.css';
import {Link} from "react-router-dom";
import Logo from '../media/login.png'

function Login() {
    return (
        <div className="login w-full  px-20 py-5 h-full flex justify-center items-center">
            <div className="login-left w-8/12 h-full ">
                <img src={Logo} alt="" className="login-logo w-11/12 "/>
            </div>
            <div className="login-right w-4/12  h-full inline-flex justify-center items-center flex-col">
                <div className="login-title text-3xl block">Login to Exclusive</div>
                <input type="email" placeholder="email"
                       className="block h-10 text-l p-3 border-c-button2 text-c-button2 border-2 outline-0 rounded-sm w-8/12 my-3 placeholder:text-gray-500"/>
                <input type="password" placeholder="password"
                       className="block h-10 text-l p-3 border-c-button2 text-c-button2 border-2 outline-0 rounded-sm w-8/12 my-3 placeholder:text-gray-500"/>
                <button
                    className="login-btn flex h-10 text-l p-3 bg-c-button2 text-white rounded-sm w-8/12 my-3 items-center justify-center hover:bg-c-hover-button2">Login
                </button>
                <div className="login-reg text-l text-gray-500">Do not have an account?</div>
                <div className="login-redirect text-l text-c-button2 underline">
                    <Link to='/signup' className="no-underline">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
