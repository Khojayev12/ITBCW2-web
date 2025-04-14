import '../App.css';
import {Link, useNavigate} from "react-router-dom";
import Logo from '../media/login.png'
import CustomInput from "../components/customInput";
import {useState} from "react";
import sendRequest from "../api/api";

function Signup(props) {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const handleRegister = async () => {
        if (password === confirmPassword){
            try {
                const response = await sendRequest.register(name, email, password);
                console.log(response.data);
                props.setIsLoggedIn(true)
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("Passwords don't match");
        }
    }

    return (
        <div className="page login w-full  px-20 py-5 h-full flex justify-center items-center">
            <div className="login-left w-8/12 h-full ">
                <img src={Logo} alt="" className="login-logo w-11/12 "/>
            </div>
            <div className="login-right w-4/12  h-full inline-flex justify-center items-center flex-col">
                <div className="login-title text-3xl block mb-4">Sign Up to Exclusive</div>
                <CustomInput className="w-8/12 " placeholder="UserName" content={name} setContent={setName}/>
                <CustomInput className="w-8/12 " placeholder="Email" content={email} setContent={setEmail}/>
                <CustomInput className="w-8/12 " placeholder="Password" content={password} setContent={setPassword}/>
                <CustomInput className="w-8/12 " placeholder="Confirm Password" content={confirmPassword} setContent={setConfirmPassword}/>
                <button onClick={handleRegister}
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
