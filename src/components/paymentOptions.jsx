import '../App.css';
import CustomInput from "./customInput";
import {useState} from "react";
import AddAddress from "./addAddress";
import CustomButton from "./customButton";

function PaymentOptions(props) {
    const [pOptions, setpOptions] = useState([{}, {}, {}, {}]);

    return (
        <div
            className="AdressBook m-auto px-20 py-10 min-w-[870px] h-fit border border-white rounded drop-shadow bg-white">
            payment options
            <div className="flex justify-end items-center" >
                <button className="flex  text-lg  bg-white text-black rounded-sm px-8 py-4 h-14 items-center justify-center mx-4 hover:bg-[#f5f5f5]" >Cancel</button>
                <CustomButton className="my-3" >Save Changes</CustomButton>
            </div>
        </div>
    );
}

export default PaymentOptions;
