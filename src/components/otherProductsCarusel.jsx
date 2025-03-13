import '../App.css';
import {Link} from "react-router-dom";

function OtherProductsCarusel(props) {
    return (<div>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={"inline-flex justify-center items-center w-40 my-14"}>
                    <div className={"w-5 h-10 bg-c-button2 inline-block"}></div>
                    <span className={"text-lg text-c-button2 font-semibold ml-4"}>{props.title}</span>
                </div>
                <button className={"border border-black rounded bg-white w-[150px] h-[56px] text-lg font-medium hover:bg-c-button2 hover:text-white"}>
                    <Link to={props.tolink}>See All</Link>
                </button>
            </div>
            <div className={"flex flex-row justify-around  overflow-auto"}>
                {props.children}
            </div>
        </div>
    );
}

export default OtherProductsCarusel;
