import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCursorPosition,
  setCursorActive,
  selectCursorActive,
  selectCursorPosition,
} from "../features/appSlice";
import "./cursor/cursor.css";

const CustomCursor = () => {
  const dispatch = useDispatch();
  const cursorPosition = useSelector(selectCursorPosition);
  const isActive = useSelector(selectCursorActive);

  useEffect(() => {
    const handleMouseMove = (e) => {
      dispatch(setCursorPosition({ left: e.pageX, top: e.pageY }));
    };

    const handleMouseEnter = () => {
      dispatch(setCursorActive(true));
    };

    const handleMouseLeave = () => {
      dispatch(setCursorActive(false));
    };

    window.addEventListener("mousemove", handleMouseMove);

    const anchorElements = document.querySelectorAll("a");
    anchorElements.forEach((anchor) => {
      anchor.addEventListener("mouseenter", handleMouseEnter);
      anchor.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      anchorElements.forEach((anchor) => {
        anchor.removeEventListener("mouseenter", handleMouseEnter);
        anchor.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [dispatch]);

  const cursorStyles = {
    left: `${cursorPosition.left}px`,
    top: `${cursorPosition.top}px`,
  };

  return (
    <div
      className={`roundCursor ${isActive ? "active" : ""}`}
      style={cursorStyles}
    ></div>
  );
};

export default CustomCursor;
