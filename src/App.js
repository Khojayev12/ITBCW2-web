import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
