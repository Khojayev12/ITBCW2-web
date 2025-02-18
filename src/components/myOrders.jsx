import '../App.css';
import Product from "./product";
import Logo from "../media/login.png";

function MyOrders(props) {
    return (
        <div>
            <div className="wished-products-list flex w-full  flex-wrap justify-around" >
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
                <Product Logo={Logo} isLiked="T" />
                <Product Logo={Logo} isLiked="F" />
                <Product Logo={Logo} isLiked="T"/>
            </div>
        </div>)
}

export default MyOrders;
