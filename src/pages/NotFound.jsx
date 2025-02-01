import '../App.css';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="page w-full h-[700px] py-10 px-20 flex justify-center items-center text-black bg-white flex-col">
            <div className="text-9xl m-8" >404 Not Found</div>
            <div className="text-xl m-8" >Looks like you are lost.</div>
            <button
                className="login-btn flex h-10 text-l px-8 py-4 bg-c-button2 text-white rounded-sm w-fit my-3 items-center justify-center hover:bg-c-hover-button2">
                <Link to="/">Back to Home page</Link>
            </button>
        </div>
    );
}

export default NotFound;
