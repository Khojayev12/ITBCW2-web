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
