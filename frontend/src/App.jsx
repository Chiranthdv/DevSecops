import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;