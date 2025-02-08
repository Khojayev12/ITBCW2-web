import '../App.css';

function CustomInput(props) {
    return (
        <input
            className={"CustomInput bg-[#f5f5f5] h-[50px] rounded text-lg placeholder:text-gray-500 text-black px-4 py-3 outline-black my-2 " + props.className}
            placeholder={props.placeholder}
        />);
}

export default CustomInput;
