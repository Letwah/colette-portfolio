import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";

import { selectPage, setPage } from "./features/appSlice";
import Projects from "./components/Projects";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const getInitialData = async () => {
    console.log(page);
    dispatch(setPage());
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Body />
      <Footer />
    </>
  );
};

export default App;
