import '../App.css';

function Product(props) {
    return (
        <div className="product border w-[270px] h-80 relative m-10">
            <div className="product-image w-[270px] h-[250px] bg-green-400 m-0">
                <img src={props.Logo} alt="" className="w-[190px] m-10"/>
            </div>
            this is a product component

        </div>
    );
}

export default Product;
