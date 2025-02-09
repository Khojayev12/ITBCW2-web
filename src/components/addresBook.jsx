import '../App.css';
import CustomInput from "./customInput";
import {useState} from "react";
import CustomButton from "./customButton";

function AdressBook() {
    const [address, setAddress] = useState([]);

    return (
        <div
            className="AdressBook m-auto px-20 py-10 min-w-[870px] h-fit border border-white rounded drop-shadow bg-white">
            <div className="w-full flex justify-around items-center my-4 mx-0">
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">District</div>
                    <CustomInput className="w-full " placeholder="District" content={name} setContent={setName}/>
                </div>
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">City</div>
                    <CustomInput className="w-full " placeholder="Khojayev" content={surname} setContent={setSurname}/>
                </div>
            </div>
            <div className="w-full flex justify-around items-center my-4 mx-0">
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Address line 1</div>
                    <CustomInput className="w-full " placeholder="District" content={name} setContent={setName}/>
                </div>s
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Address line 2</div>
                    <CustomInput className="w-full " placeholder="Khojayev" content={surname} setContent={setSurname}/>
                </div>
            </div>
            <div className="flex justify-end items-center" >
                <button className="flex  text-lg  bg-white text-black rounded-sm px-8 py-4 h-14 items-center justify-center mx-4 hover:bg-[#f5f5f5]" >Cancel</button>
                <CustomButton className="my-3" >Save Changes</CustomButton>
            </div>
        </div>
    );
}

export default AdressBook;
