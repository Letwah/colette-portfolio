import { Slides } from "./slider/Slides";

import "./slider/slider.css";

const Slider = () => {
  return (
    <>
      <section className="sliderContainer" id="slider">
        <Slides />
      </section>
    </>
  );
};
export default Slider;
