import '../App.css';
import DeliveryLogo from "../media/icon-delivery.svg"
import ReturnLogo from "../media/Icon-return.svg"
import ProductImg from "../media/product_sample.png"
import ProductReview from "../components/productReviews";
import CustomButton from "../components/customButton";
import {useState} from "react";
import {FaRegHeart} from "react-icons/fa6";

function DynamicProduct() {
    var state=true
    const [productCount, setProductCount] = useState(1);
    const PlusProductCount = ()=>{
        setProductCount(productCount+1)
    }
    const MinusProductCount = ()=>{
        setProductCount(productCount-1)
    }
    return (
        <div className="page DynamicProduct">
            <div className={"p-16"} >
                <div className={"product-hero flex flex-row justify-center w-full"} >
                    <div className={"product-photos w-[686px] flex flex-row"} >
                        <div className={"w-[170px] mr-4"}>
                            <img src={ProductImg} alt="" className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                            <img src={ProductImg} alt="" className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                            <img src={ProductImg} alt="" className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                            <img src={ProductImg} alt="" className={"bg-gray-100 w-[170px] h-[138px] mb-4"}/>
                        </div>
                        <div className={"w-3/4"}>
                            <img src={ProductImg} alt="" className={"bg-gray-100 w-[500px] h-[600px]"}/>
                        </div>
                    </div>
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
                            <button className={"border border-gray-500 rounded-l w-10 h-11 inline-flex justify-center items-center hover:bg-c-button2 hover:text-white"} onClick={MinusProductCount} >-</button>
                            <div className={"border-t border-b border-gray-500 w-20 h-11 inline-flex justify-center items-center"}>{productCount}</div>
                            <button className={"border border-c-button2 rounded-r w-10 h-11 inline-flex justify-center items-center bg-c-button2 text-white"} onClick={PlusProductCount}>+</button>
                            <CustomButton className={"inline-block ml-4 w-40 h-[44px] rounded-l rounded-r "} >Buy Now</CustomButton>
                            <div className={"product-p-like-btn group border rounded-l rounded-r border-gray-500 w-10 h-11 inline-flex justify-center items-center ml-6 hover:bg-red-500"}><FaRegHeart className={"group-hover:text-white"} /></div>
                        </div>
                        <div className={"mt-4 flex flex-col border border-gray-500 rounded-t px-4 py-6"}>
                            <div className={"flex flex-row"}>
                                <img src={DeliveryLogo} alt=""/>
                                <div className={"text-lg ml-4 font-medium"}>Free Delivery <br/><span className={"text-xs font-medium"}>Enter your postal code for Delivery Availability</span></div>
                            </div>
                        </div>
                        <div className={"flex flex-col border-b border-l border-r border-gray-500 rounded-b px-4 py-6"}>
                            <div className={"flex flex-row"}>
                                <img src={ReturnLogo} alt=""/>
                                <div className={"text-lg ml-4 font-medium"}>Return Delivery <br/><span className={"text-xs font-medium"}>Free 30 Days Delivery Returns</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DynamicProduct;
