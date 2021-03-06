import React from "react";

function Footer() {
  return (
    <footer className="footer">
      {/* <a href="https://github.com/AlfieLamertonTM">
        <img
          className="facePic"
          src={process.env.PUBLIC_URL + "/square_face.png"}
          alt="My face"
        />
      </a> */}
      <p className="footerText">© Alfie Lamerton 2021 ©</p>
      {/* <a href="https://www.linkedin.com/in/alfie-lamerton/">
        <img
          className="linkedIn"
          src={process.env.PUBLIC_URL + "/linkedin.png"}
          alt="LinkedIn"
        />
      </a> */}
    </footer>
  );
}

export default Footer;
