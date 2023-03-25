import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillStar,
  AiFillFire,
  AiTwotonePhone,
} from "react-icons/ai";
import { FaUserAlt, FaFilm } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import "./Nav.scss";

function Nav() {
  return (
    <div className="nav__container">
      <h2 className="nav__container-title">
        Cine<span>plex</span>
      </h2>

      <ul className="nav__container-ul">
        <li className="nav__container-li">
          <Link className="nav__container-li-item" to="/home">
            <AiFillHome /> Home
          </Link>
        </li>

        <span className="nav__container-line"></span>

        <li className="nav__container-li">
          <Link className="nav__container-li-item" to="/profile">
            <FaUserAlt /> Profile
          </Link>
        </li>

        <span className="nav__container-line"></span>

        <li className="nav__container-li">
          <Link className="nav__container-li-item" to="/favorites">
            <AiFillStar /> Favorites
          </Link>
        </li>

        <span className="nav__container-line"></span>

        <li className="nav__container-li">
          <Link className="nav__container-li-item" to="/trending">
            <AiFillFire /> Trending
          </Link>
        </li>

        <span className="nav__container-line"></span>

        <li className="nav__container-li">
          <Link className="nav__container-li-item" to="/upcoming">
            <FaFilm /> Upcoming
          </Link>
        </li>

        <span className="nav__container-line"></span>

        <li className="nav__container-li">
          <Link className="nav__container-li-item" to="/packages">
            <FiPackage /> Packages
          </Link>
        </li>

        <span className="nav__container-line"></span>

        <li className="nav__container-li">
          <Link className="nav__container-li-item" to="/support">
            <AiTwotonePhone /> Support
          </Link>
        </li>

        <span className="nav__container-line"></span>
      </ul>
    </div>
  );
}

export default Nav;
