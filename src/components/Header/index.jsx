import React from "react";
import JohannesGutenberg from "../../images/gutenberg_v2.png";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header__title"> Project Gutenberg</h1>
        <p className="header__subtitle">
          Project Gutenberg is a library of over 60,000 free eBooks
        </p>
        <p className='header__description'>
          Choose among free epub and Kindle eBooks, download them or read them
          online. You will find the world’s great literature here, with focus on
          older works for which U.S. copyright has expired. Thousands of
          volunteers digitized and diligently proofread the eBooks, for you to
          enjoy.
        </p>
        <a href='#some__books' className='btn__some-books'>
          See Some Books
        </a>
      </div>
      <div className="header-right">
        <img
          className='header__img'
          src={JohannesGutenberg}
          alt="Retrato de Johannes Gutenberg hecho después de su muerte"
          title="Johannes Gutenberg"
        />
      </div>
    </header>
  );
};

export default Header;
