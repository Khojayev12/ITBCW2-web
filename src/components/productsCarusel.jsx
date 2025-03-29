import '../App.css';
import {Link} from "react-router-dom";
import Product from "./product";

function ProductsCarusel(props) {
    return (<div className={"my-8"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={"inline-flex flex-col justify-start my-4"}>
                    <span className={"inline-flex flex-row justify-start items-center"} >
                        <div className={"w-5 h-10 bg-c-button2 inline-block"}></div>
                        <span className={"text-lg text-c-button2 font-semibold ml-4"}>{props.subtitle}</span>
                    </span>
                    <div className={"text-4xl font-semibold text-black mt-4"}>{props.title}</div>
                </div>
                <button className={"border border-white rounded  w-[150px] h-[56px] text-lg font-medium bg-c-button2 text-white"}>
                    <Link to={props.tolink}>View All</Link>
                </button>
            </div>
            <div className={"flex flex-row justify-around  overflow-auto"}>
                {props.productList.map((product) => (
                    <Product Logo={product.image} reviews={product.rating} title={product.title} cost={product.cost} discount={product.discount} isLiked={product.isLiked} showDel={false} key={product.id} id={product.id} />
                ))}
            </div>
        </div>
    );
}

export default ProductsCarusel;
