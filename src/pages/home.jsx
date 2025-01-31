import '../App.css';
import Product from "../components/product";
import Logo from "../media/login.png"

function Home() {
    return (
        <div className="page home">
            <h1>Hello Home Page!</h1>
            <Product Logo={Logo} isLiked="T" />
            <Product Logo={Logo} isLiked="F" />
            <Product Logo={Logo} isLiked="T"/>

        </div>
    );
}

export default Home;
