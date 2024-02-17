import "./footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div>
            <p>&copy; Copyright 2024</p>
          </div>

          <div>
            <p>
              Designed and Built by
              <a
                href="https://linkedIn/colette-smith"
                target="_blank"
                rel="noreferrer"
              >
                &nbsp;Colette Smith
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
