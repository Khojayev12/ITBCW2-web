import '../App.css';
import CustomInput from "./customInput";

function EditProfile() {
    return (
        <div className="editProfile m-auto px-20 py-10 w-fit h-fit border border-white rounded drop-shadow bg-white">
            <div className="text-c-button2 text-xl">Edit Your Profile</div>
            <div>+
            </div>
            <CustomInput className="w-[330px] " placeholder="Name"/>
        </div>
    );
}

export default EditProfile;
