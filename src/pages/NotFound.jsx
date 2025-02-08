import '../App.css';
import {Link} from "react-router-dom";
import CustomButton from "../components/customButton";

function NotFound() {
    return (
        <div className="page w-full h-[700px] py-10 px-20 flex justify-center items-center text-black bg-white flex-col">
            <div className="text-9xl m-8" >404 Not Found</div>
            <div className="text-xl m-8" >Looks like you are lost.</div>
            <CustomButton
                className="login-btn h-10 text-l px-8 py-4  w-fit my-3">
                <Link to="/">Back to Home page</Link>
            </CustomButton>
        </div>
    );
}

export default NotFound;
