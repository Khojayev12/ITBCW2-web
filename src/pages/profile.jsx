import '../App.css';
import {Link} from "react-router-dom";
import {useState} from "react";
import EditProfile from "../components/editProfile";
import AddresBook from "../components/addresBook";
import PaymentOptions from "../components/paymentOptions";
import MyOrders from "../components/myOrders";
import MyReturns from "../components/myReturns";
import MyCancellations from "../components/myCancellations";

function Profile() {
    const [subpage, setSubpage] = useState("Profile");
    const [subPageComponent, setSubPageComponent] = useState(<EditProfile/>);

    const HandlePageChange = (targetSubPage) => {
        setSubpage(targetSubPage);
        if (targetSubPage === "Profile"){
            setSubPageComponent(<EditProfile/>);
        } else if (targetSubPage === "AddresBook"){
            setSubPageComponent(<AddresBook/>);
        }
        else if (targetSubPage === "PaymentOptions"){
            setSubPageComponent(<PaymentOptions/>);
        }
        else if (targetSubPage === "MyOrders"){
            setSubPageComponent(<MyOrders/>);
        }
        else if (targetSubPage === "MyReturns"){
            setSubPageComponent(<MyReturns/>);
        }
        else if (targetSubPage === "MyCancellations"){
            setSubPageComponent(<MyCancellations/>);
        }
    }
    return (
        <div className="page w-full p-20 flex flex-row justify-center">
            <div className="inline-flex flex-col w-1/4 ">
                <div className="bg-white text-black text-lg text-left">Manage My Account</div>
                <button className={"mx-4 my-2 text-lg hover:text-c-button2 cursor-pointer w-fit " + (subpage==="Profile"?"text-c-button2":"text-gray-500")}
                     onClick={() => {
                         HandlePageChange("Profile")
                     }}>My Profile
                </button>
                <div className={"mx-4 my-2 text-lg hover:text-c-button2 cursor-pointer w-fit " + (subpage==="AddresBook"?"text-c-button2":"text-gray-500")}
                     onClick={() => {
                         HandlePageChange("AddresBook")
                     }}>Address Book
                </div>
                <div className={"mx-4 my-2 text-lg hover:text-c-button2 cursor-pointer w-fit " + (subpage==="PaymentOptions"?"text-c-button2":"text-gray-500")}
                     onClick={() => {
                         HandlePageChange("PaymentOptions")
                     }}>Payment Options
                </div>
                <div className="bg-white text-black text-lg text-left">Orders</div>
                <div className={"mx-4 my-2 text-lg hover:text-c-button2 cursor-pointer w-fit " + (subpage==="MyOrders"?"text-c-button2":"text-gray-500")}
                     onClick={() => {
                         HandlePageChange("MyOrders")
                     }}>My Orders
                </div>
                <div className={"mx-4 my-2 text-lg hover:text-c-button2 cursor-pointer w-fit " + (subpage==="MyReturns"?"text-c-button2":"text-gray-500")}
                     onClick={() => {
                         HandlePageChange("MyReturns")
                     }}>My Returns
                </div>
                <div className={"mx-4 my-2 text-lg hover:text-c-button2 cursor-pointer w-fit " + (subpage==="MyCancellations"?"text-c-button2":"text-gray-500")}
                     onClick={() => {
                         HandlePageChange("MyCancellations")
                     }}>My Cancellations
                </div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"><Link
                    to="/wishlist">My Wishlist</Link></div>
                <div className="mx-4 my-2 text-gray-500 text-lg hover:text-c-button2 cursor-pointer w-fit"><Link
                    to="/cart">My Cart</Link></div>
            </div>
            <div className="inline-flex w-3/4  justify-center">
                {subPageComponent}
            </div>
        </div>
    );
}

export default Profile;
