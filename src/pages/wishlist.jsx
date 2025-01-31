import '../App.css';
import Product from "../components/product";
import Logo from "../media/login.png"

function Wishlist() {
    return (
        <div className="page w-full p-20">
            <div className="flex justify-between items-center">
                <div className="text-xl" >Whichlist(4)</div>
                <button className="border border-opacity-50 border-black px-12 py-4 rounded" >Move all to Bag</button>
            </div>
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


        </div>
    );
}

export default Wishlist;
