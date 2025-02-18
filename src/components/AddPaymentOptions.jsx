import '../App.css';
import CustomInput from "./customInput";
import {useState} from "react";
import VisaLogo from "../media/VisaLogo.png"

function AddPaymentOptions(props) {
    const [type, setType] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardExpireDT, setCardExpireDT] = useState("");

    const HandleChanges = ()=>{
        var newPaymentOptionsList = props.pOptions;
        newPaymentOptionsList[props.paymentOptionID] = {"type":type, "cardNumber":cardNumber, "cardCVV":cardCVV, "cardExpireDT":cardExpireDT};
        props.setpOptions(newPaymentOptionsList);
    }

    const HandleTypeChanges = (newType)=>{
        setType(newType);
    }
    return (
        <div className="bg-white w-full h-fit" onChange={HandleChanges} >
            <div>
                <div className="w-fit mx-2 flex flex-row">
                    <input type="radio" id="opt-1" value="visa" name="payment-option" className="inline-block" onChange={()=>HandleTypeChanges("visa")} />
                    <img src={VisaLogo} alt="" className="w-12 inline-block mr-4"/>
                    <input type="radio" id="opt-2" value="mastercard" name="payment-option" className="inline-block" onChange={()=>HandleTypeChanges("mastercard")} />
                    <img src={VisaLogo} alt="" className="w-12 inline-block mr-4"/>
                </div>
            </div>
            <div className="w-full flex justify-around items-start my-4 mx-0">
                <div className="w-11/12 inline-flex flex-col">
                    <div className="text-black text-lg">Card Number</div>
                    <CustomInput className="w-full " placeholder="Card Number" content={cardNumber} setContent={setCardNumber}/>
                </div>
            </div>
            <div className="w-full flex justify-around items-center my-4 mx-0">
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Expire Date</div>
                    <CustomInput className="w-full " type="text" placeholder="MM/YY" content={cardExpireDT} setContent={setCardExpireDT}/>
                </div>
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">CVV</div>
                    <CustomInput className="w-full " placeholder="CVV" content={cardCVV} setContent={setCardCVV}/>
                </div>
            </div>
        </div>
    );
}

export default AddPaymentOptions;
