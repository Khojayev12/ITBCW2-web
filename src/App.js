import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Routes, Route, useParams} from "react-router-dom";
import Header from "./components/header";
import Login from "./pages/login";
import Signup from "./pages/signup";
import {useState} from "react";
import Wishlist from "./pages/wishlist";
import Footer from "./components/footer";
import NotFound from "./pages/NotFound";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import DynamicProduct from "./pages/dynamicProduct";
import AllProducts from "./pages/allProducts";
import About from "./pages/about";

function ProductPage() {
    let { id } = useParams();
    return <DynamicProduct id={id} />;
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userID, setUserID] = useState(2);
    return (
        <div className="App">
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Routes>
                    <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userID={userID}/>}/>
                    <Route path="/login" element={<Login  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserID={setUserID}/>}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/signup" element={<Signup  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserID={setUserID}/>}/>
                    <Route path="/wishlist" element={<Wishlist isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userID={userID}/>}/>
                    <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userID={userID}/>}/>
                    <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userID={userID}/>}/>
                    <Route path="/products" element={<AllProducts isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
                    <Route path="/product/:id" element={<ProductPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
