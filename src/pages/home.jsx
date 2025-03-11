import '../App.css';
import Product from "../components/product";
import Logo from "../media/product_sample.png"

function Home() {
    return (
        <div className="page home">
            <h1>Hello Home Page!</h1>
            <Product Logo={Logo} isLiked="T" reviews={3.0} />
            <Product Logo={Logo} isLiked="F" reviews={0.0} />
            <Product Logo={Logo} isLiked="T" reviews={5.0}/>

        </div>
    );
}

export default Home;
