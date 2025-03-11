import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
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

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/p-test" element={<DynamicProduct/>}/>
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
