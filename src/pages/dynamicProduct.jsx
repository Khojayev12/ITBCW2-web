import '../App.css';
import Product from "../components/product";
import Logo from "../media/product_sample.png"
import ProductReview from "../components/productReviews";

function DynamicProduct() {
    var state=true
    return (
        <div className="page DynamicProduct">
            <div className={"p-16"} >
                <div className={"product-hero flex flex-row justify-center w-full"} >
                    <div className={"product-photos w-2/3"} >photo</div>
                    <div className={"product-info w-1/3 ml-4"} >
                        <div className={"p-title text-2xl text-black font-semibold"} >Havic HV G-92 Gamepad</div>
                        <div className={"text-lg my-4 text-gray-500 flex flex-row"}>
                            <ProductReview score={4}/> (150 Reviews) | {state?<span className={"text-lg text-green-500 opacity-60"} >In Storck</span>:<span  className={"text-lg text-red-500 opacity-60"}>Out of Storck</span>}
                        </div>
                        <div className={"p-cost  my-4 text-2xl text-black"}>$192.0</div>
                        <div className={"p-description  my-1 text-lg"}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</div>
                        <hr/>
                        <div className={"text-xl  my-4"} >
                            Colors: <input type="radio"/>
                        </div>
                        <div className={"text-xl  my-4 flex flex-row align-middle"}>
                            Storage:
                            <div className={"inline-block ml-4 h-8 px-2 rounded text-center text-lg " + " bg-c-button2 text-white"}>128GB</div>
                            <div className={"inline-block ml-4 h-8 px-2 rounded border border-gray-500 text-lg text-center"}>256GB</div>
                            <div className={"inline-block ml-4 h-8 px-2 rounded border border-gray-500 text-lg text-center"}>512GB</div>
                        </div>
                        <div className={"my-4 flex flex-row"} >
                            <div className={"border border-gray-500 roun"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DynamicProduct;
