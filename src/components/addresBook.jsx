import '../App.css';
import CustomInput from "./customInput";
import {useState} from "react";
import AddAddress from "./addAddress";
import CustomButton from "./customButton";

function AdressBook() {
    const [address, setAddress] = useState([{}, {}, {}, {}]);

    return (
        <div
            className="AdressBook m-auto px-20 py-10 min-w-[870px] h-fit border border-white rounded drop-shadow bg-white">
            <div className="text-c-button2 text-xl font-semibold">Address 1</div>
            <AddAddress address={address} setAddress={setAddress} addressID={1} />
            <div className="text-c-button2 text-xl font-semibold">Address 2</div>
            <AddAddress address={address} setAddress={setAddress} addressID={2} />
            <div className="text-c-button2 text-xl font-semibold">Address 3</div>
            <AddAddress address={address} setAddress={setAddress} addressID={3} />
            <div className="text-c-button2 text-xl font-semibold">Address 4</div>
            <AddAddress address={address} setAddress={setAddress} addressID={4} />
            <div className="flex justify-end items-center" >
                <button className="flex  text-lg  bg-white text-black rounded-sm px-8 py-4 h-14 items-center justify-center mx-4 hover:bg-[#f5f5f5]" >Cancel</button>
                <CustomButton className="my-3" >Save Changes</CustomButton>
            </div>
        </div>
    );
}

export default AdressBook;
