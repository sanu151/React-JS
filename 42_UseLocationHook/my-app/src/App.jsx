import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
