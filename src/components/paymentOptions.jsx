import '../App.css';
import CustomInput from "./customInput";
import {useState} from "react";
import AddAddress from "./addAddress";
import CustomButton from "./customButton";
import AddPaymentOptions from "./AddPaymentOptions";

function PaymentOptions(props) {
    const [pOptions, setpOptions] = useState([{}, {}, {}, {}]);

    return (
        <div
            className="AdressBook m-auto px-20 py-10 min-w-[870px] h-fit border border-white rounded drop-shadow bg-white">
            <div className="text-c-button2 text-xl font-semibold">Payment Option 1</div>
            <AddPaymentOptions pOptions={pOptions} setpOptions={setpOptions} paymentOptionID={1} />
            <div className="text-c-button2 text-xl font-semibold">Payment Option 2</div>
            <AddPaymentOptions pOptions={pOptions} setpOptions={setpOptions} paymentOptionID={2} />
            <div className="text-c-button2 text-xl font-semibold">Payment Option 3</div>
            <AddPaymentOptions pOptions={pOptions} setpOptions={setpOptions} paymentOptionID={3} />
            <div className="text-c-button2 text-xl font-semibold">Payment Option 4</div>
            <AddPaymentOptions pOptions={pOptions} setpOptions={setpOptions} paymentOptionID={4} />
            <div className="flex justify-end items-center" >
                <button className="flex  text-lg  bg-white text-black rounded-sm px-8 py-4 h-14 items-center justify-center mx-4 hover:bg-[#f5f5f5]" >Cancel</button>
                <CustomButton className="my-3" >Save Changes</CustomButton>
            </div>
        </div>
    );
}

export default PaymentOptions;
