import '../App.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import EditProfile from "../components/editProfile";

function Profile() {
    const [subpage, setSubpage] = useState(<EditProfile/>);
    return (
        <div className="page w-full p-20 flex flex-row justify-center">
            <div className="inline-flex flex-col w-1/4 ">
                <div className="bg-white text-black text-lg text-left">Manage My Account</div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"
                     onClick={() => {
                         setSubpage(<EditProfile/>)
                     }}>My Profile
                </div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"
                     onClick={() => {
                         setSubpage(<EditProfile/>)
                     }}>Address Book
                </div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"
                     onClick={() => {
                         setSubpage(<EditProfile/>)
                     }}>Payment Options
                </div>
                <div className="bg-white text-black text-lg text-left">Orders</div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"
                     onClick={() => {
                         setSubpage(<EditProfile/>)
                     }}>My Orders
                </div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"
                     onClick={() => {
                         setSubpage(<EditProfile/>)
                     }}>My Returns
                </div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"
                     onClick={() => {
                         setSubpage(<EditProfile/>)
                     }}>My Cancellations
                </div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"><Link
                    to="/wishlist">My Wishlist</Link></div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"><Link
                    to="/cart">My Cart</Link></div>
            </div>
            <div className="inline-flex w-3/4  justify-center">{subpage}
            </div>
        </div>
    );
}

export default Profile;
