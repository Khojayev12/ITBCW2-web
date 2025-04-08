import '../App.css';
import {Link} from "react-router-dom";
import Logo from '../media/login.png'
import {useState} from "react";
import CustomInput from "../components/customInput";
import sendRequest from "../api/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        const response = await sendRequest.login(email, password);
        console.log(response.data);

        if (response.data.hasOwnProperty('Email')){
            if (response.data.Email === email || response.data.Username === email ){
                console.log("Login successful");
            }
        }
    }

    return (
        <div className="page login w-full  px-20 py-5 h-full flex justify-center items-center">
            <div className="login-left w-8/12 h-full ">
                <img src={Logo} alt="" className="login-logo w-11/12 "/>
            </div>
            <div className="login-right w-4/12  h-full inline-flex justify-center items-center flex-col">
                <div className="login-title text-3xl block">Login to Exclusive</div>
                <CustomInput className="w-8/12 " placeholder="Email or Username" content={email} setContent={setEmail}/>
                <CustomInput className="w-8/12 " type="password" placeholder="Password" content={password} setContent={setPassword}/>
                <button onClick={handleLogin}
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
