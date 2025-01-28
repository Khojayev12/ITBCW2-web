import '../App.css';
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login w-full  px-20 py-5 h-full flex justify-center items-center">
            <div className="login-left w-8/12 h-full "> left</div>
            <div className="login-right w-4/12  h-full inline-flex justify-center items-center flex-col color-login">
                <div className="login-title text-4xl block">Login to Exclusive</div>
                <input type="email" placeholder="email" className="block h-10 text-l p-3 border-rose-700 border-2  rounded-sm w-8/12 my-3"/>
                <input type="password" placeholder="password" className="block h-7 border-black border-2 border-opacity-30 rounded-sm w-8/12 my-3"/>
            </div>
        </div>
    );
}

export default Login;
