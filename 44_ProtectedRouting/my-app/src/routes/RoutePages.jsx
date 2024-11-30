import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddBlog from "../pages/AddBlog";
import About from "../pages/About";
import Protected from "./Protected";
import NavBar from "../layout/NavBar";

const RoutePages = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <BrowserRouter>
      <NavBar />
      <div>
        {isLoggedin ? (
          <button
            onClick={() => {
              setIsLoggedin(!isLoggedin);
            }}
          >
            Log Off
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedin(!isLoggedin);
            }}
          >
            Log In
          </button>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-blog"
          element={
            <Protected isLoggedin={isLoggedin}>
              <AddBlog />
            </Protected>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePages;
