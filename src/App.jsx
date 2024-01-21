import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./app.css";
import { selectPage, setPage } from "./features/appSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import CustomCursor from "./components/Cursor";
import ProjectDetails from "./components/ProjectDetails";
import VanillaJsSlide from "./components/projectDetails/VanillaJsSlide";
import StudioFrieghtClone from "./components/projectDetails/StudioFrieghtClone";
import SimpsonsAPI from "./components/projectDetails/SimpsonsAPI";
import Todo from "./components/projectDetails/Todo";
import JimmyHutch from "./components/projectDetails/JimmyHutch";
import Hackathon from "./components/projectDetails/Hackathon";

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
          <Route
            path="/project-details/:projectName"
            element={<ProjectDetails />}
          />
          <Route path="/vanilla-slide" element={<VanillaJsSlide />} />
          <Route path="/studio-frieght" element={<StudioFrieghtClone />} />
          <Route path="/simpsons-api" element={<SimpsonsAPI />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/jimmy-hutch" element={<JimmyHutch />} />
          <Route path="/hackathon" element={<Hackathon />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
