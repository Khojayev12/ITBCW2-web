import '../App.css';
import CustomInput from "./customInput";
import {useState} from "react";
import CustomButton from "./customButton";

function EditProfile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const[currentPassword, setCurrentPassword] = useState('');
    const[newPassword, setNewPassword] = useState('');
    const[newPasswordConfirm, setNewPasswordConfirm] = useState('');
    return (
        <div
            className="editProfile m-auto px-20 py-10 min-w-[870px] h-fit border border-white rounded drop-shadow bg-white">
            <div className="text-c-button2 text-xl font-semibold">Edit Your Profile</div>
            <div className="w-full flex justify-around items-center my-4 mx-0">
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">First Name</div>
                    <CustomInput className="w-full " placeholder="Bek" content={name} setContent={setName}/>
                </div>
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Last Name</div>
                    <CustomInput className="w-full " placeholder="Khojayev" content={surname} setContent={setSurname}/>
                </div>
            </div>
            <div className="w-full flex justify-around items-center my-4 mx-0">
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Email</div>
                    <CustomInput className="w-full " placeholder="example@gmail.com" content={email}
                                 setContent={setEmail}/>
                </div>
                <div className="w-5/12 inline-flex flex-col">
                    <div className="text-black text-lg">Address</div>
                    <CustomInput className="w-full " placeholder="Khiva, Mushtarak 32" content={address}
                                 setContent={setAddress}/>
                </div>
            </div>
            <div className="w-full flex justify-around flex-col my-4 mx-0">
                <div className="text-black text-lg w-full" >Password Changes</div>
                <CustomInput className="w-full " placeholder="Current Password" content={currentPassword} setContent={setCurrentPassword} type="password" />
                <CustomInput className="w-full " placeholder="New Password" content={newPassword} setContent={setNewPassword} type="password" />
                <CustomInput className="w-full " placeholder="Confirm New Password" content={newPasswordConfirm} setContent={setNewPasswordConfirm} type="password" />
            </div>
            <div className="flex justify-end items-center" >
                <button className="flex  text-lg  bg-white text-black rounded-sm px-8 py-4 h-14 items-center justify-center mx-4 hover:bg-[#f5f5f5]" >Cancel</button>
                <CustomButton className="my-3" >Save Changes</CustomButton>
            </div>
        </div>
    );
}

export default EditProfile;
