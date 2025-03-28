import '../App.css';
import Product from "./product";
import Logo from "../media/login.png";

const products = [
    {
        id: 1,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 0,
        cost: 500,
        rating: 3.5,
        isLiked: false,
    },
    {
        id: 2,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 400,
        rating: 5.0,
        isLiked: false,
    },
    {
        id: 3,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 45,
        cost: 500,
        rating: 1.5,
        isLiked: false,
    },
    {
        id: 4,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 5,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 6,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },

    {
        id: 7,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },
    {
        id: 8,
        image: Logo,
        title: "iPhone 14 Series",
        discount: 40,
        cost: 100,
        rating: 3.5,
        isLiked: false,
    },
];

function MyCancellations(props) {
    return (
        <div>
            <div className="wished-products-list flex w-full  flex-wrap justify-around">
                {products.map((product) => (
                    <Product Logo={product.image} reviews={product.rating} title={product.title} cost={product.cost}
                             discount={product.discount} isLiked={product.isLiked} showDel={false} key={product.id}
                             id={product.id}/>
                ))}
            </div>
        </div>)
}

export default MyCancellations;
