import '../App.css';
import CustomInput from "./customInput";
import {useState} from "react";

function AddAddress(props) {
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [addressline1, setAddressline1] = useState("");
    const [addressline2, setAddressline2] = useState("");

    const HandleChanges = ()=>{
        var newAddressList = props.address;
        newAddressList[props.addressID] = {"district":district, "city":city, "addressline1":addressline1, "addressline2":addressline2};
        props.setAddress(newAddressList);
    }
    return (
        <div className="bg-white w-full h-fit" onChange={HandleChanges} >
            <div className="w-full flex justify-around items-center my-4 mx-0">
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">District</div>
                    <CustomInput className="w-full " placeholder="District" content={district} setContent={setDistrict}/>
                </div>
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">City</div>
                    <CustomInput className="w-full " placeholder="City" content={city} setContent={setCity}/>
                </div>
            </div>
            <div className="w-full flex justify-around items-center my-4 mx-0">
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Address line 1</div>
                    <CustomInput className="w-full " placeholder="Address line 1" content={addressline1} setContent={setAddressline1}/>
                </div>
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Address line 2</div>
                    <CustomInput className="w-full " placeholder="Address line 2" content={addressline2} setContent={setAddressline2}/>
                </div>
            </div>
        </div>
    );
}

export default AddAddress;
