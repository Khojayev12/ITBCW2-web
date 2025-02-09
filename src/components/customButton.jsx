import '../App.css';

function customButton(props) {
    return (
        <button
            className={"customButton flex  text-lg  bg-c-button2 text-white rounded-sm px-8 py-4 h-14 items-center justify-center hover:bg-c-hover-button2 " + props.className}>
             {props.children}
        </button>
    );
}

export default customButton;
