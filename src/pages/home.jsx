import '../App.css';
import Product from "../components/product";
import Logo from "../media/product_sample.png"
import HomeCarusel from "../components/homeCarusel";
import ProductsCarusel from "../components/productsCarusel";

function Home() {
    return (
        <div className="page home py-12 px-24">
            <HomeCarusel />
            <ProductsCarusel subtitle={"Today's"} title={"Flash Sales"}>
                <Product Logo={Logo} isLiked="T" reviews={3.0} />
                <Product Logo={Logo} isLiked="F" reviews={0.0} />
                <Product Logo={Logo} isLiked="T" reviews={5.0}/>
                <Product Logo={Logo} isLiked="T" reviews={3.0} />
                <Product Logo={Logo} isLiked="F" reviews={0.0} />
                <Product Logo={Logo} isLiked="T" reviews={5.0}/>
                <Product Logo={Logo} isLiked="T" reviews={3.0} />
                <Product Logo={Logo} isLiked="F" reviews={0.0} />
                <Product Logo={Logo} isLiked="T" reviews={5.0}/>
            </ProductsCarusel>
            <ProductsCarusel subtitle={"This Month"} title={"Best Selling Products"}>
                <Product Logo={Logo} isLiked="T" reviews={3.0} />
                <Product Logo={Logo} isLiked="F" reviews={0.0} />
                <Product Logo={Logo} isLiked="T" reviews={5.0}/>
                <Product Logo={Logo} isLiked="T" reviews={3.0} />
                <Product Logo={Logo} isLiked="F" reviews={0.0} />
                <Product Logo={Logo} isLiked="T" reviews={5.0}/>
                <Product Logo={Logo} isLiked="T" reviews={3.0} />
                <Product Logo={Logo} isLiked="F" reviews={0.0} />
                <Product Logo={Logo} isLiked="T" reviews={5.0}/>
            </ProductsCarusel>
            <h1>Hello Home Page!</h1>
            <Product Logo={Logo} isLiked="T" reviews={3.0} />
            <Product Logo={Logo} isLiked="F" reviews={0.0} />
            <Product Logo={Logo} isLiked="T" reviews={5.0}/>
        </div>
    );
}

export default Home;
