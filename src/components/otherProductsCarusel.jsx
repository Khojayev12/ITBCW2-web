import '../App.css';
import {Link} from "react-router-dom";
import Product from "./product";

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
                {props.productList.map((product) => (
                    <Product Logo={product.image} reviews={product.rating} title={product.title} cost={product.cost} discount={product.discount} isLiked={'T'} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default OtherProductsCarusel;
