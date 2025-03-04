import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Blog_1 from "./components/blog_posts/1";
import Blog_2 from "./components/blog_posts/2";
import Blog_3 from "./components/blog_posts/3";

const RouteSwitch = () => {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/blog/1" element={<Blog_1 />} />
            <Route path="/blog/2" element={<Blog_2 />} />
            <Route path="/blog/3" element={<Blog_3 />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default RouteSwitch;