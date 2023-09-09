import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Contact from "./components/Contact";

import Home from "./components/Home";

import { selectPage, setPage } from "./features/appSlice";
import Projects from "./components/Projects";
import CustomCursor from "./components/Cursor";

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
      <div className="App">
        <Header />
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
