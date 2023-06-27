import "../css/style.css";
import { useState } from "react";
import logo from "../img/logo.png";
import sprite from "../img/icon/sprite.svg"

const navLogo = (
  <div className="nav__logo logo">
    <img className="logo__image" src={logo} alt="logo" />
  </div>
);

const navMenu = (
  <div className="nav__menu menu">
    <ul className="menu__list">
      <li className="menu__item">
        <a href="index.html" className="menu__link">
          Главное
        </a>
      </li>
      <li className="menu__item">
        <a href="index.html" className="menu__link">
          Мой плейлист
        </a>
      </li>
      <li className="menu__item">
        <a href="index.html" className="menu__link">
          Войти
        </a>
      </li>
    </ul>
  </div>
);

function MainNav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <nav className="main__nav nav">
      {navLogo}
      <svg onClick={toggleVisibility} className="nav__burger burger">
        <use xlinkHref={`${sprite}#icon-burger`} />
      </svg>
      {visible && navMenu}
    </nav>
  );
}

export default MainNav;
