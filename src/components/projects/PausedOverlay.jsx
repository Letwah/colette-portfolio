import { css } from "@emotion/css";

// const PausedOverlay = ({ title, description }) => (
const PausedOverlay = () => (
  <div>
    <div
      className={css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--overlay-color);
        backdrop-filter: blur(2px);
        z-index: 1;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        h3 {
          margin: 0 1rem 1rem 1rem;
          color: var(--background-color);
          text-align: left;
        }
        p {
          margin: 0 1rem 0;
          color: var(--background-color);
          line-height: 1.1rem;
          font-weight: 400;
          font-family: "AzeretMono-Regular", monospace;
        }
        p a {
          color: var(--link-color);
        }
      `}
    ></div>
    {/* <h3>{title}</h3>
    <p>{description}</p> */}
  </div>
);

export default PausedOverlay;
