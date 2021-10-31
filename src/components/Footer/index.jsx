import React from "react";
import "./styles.css";
import ibiblio from "../../images/ibiblio_logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__navbar">
        <a href="https://www.gutenberg.org/policy/privacy_policy.html">
          {" "}
          Privacy policy
        </a>
        <a href="https://www.gutenberg.org/about/">About Project Gutenberg</a>
        <a href="https://www.gutenberg.org/policy/terms_of_use.html">
          Terms of Use{" "}
        </a>
        <a href="https://www.gutenberg.org/about/contact_information.html">
          Contact Information{" "}
        </a>
        <a href="https://www.gutenberg.org/help/">Get Help </a>
      </nav>
      <a href="https://www.ibiblio.org/">
        <img
          className="ibiblio__img"
          src={ibiblio}
          alt="Ibiblio isologo"
          title="Ibiblio isologo"
        />
      </a>
    </footer>
  );
};

export default Footer;
