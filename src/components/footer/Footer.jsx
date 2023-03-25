import React from "react";
import "./Footer.scss";
import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <FaTiktok className="footer__icons-items" />
        <FaInstagram className="footer__icons-items" />
        <FaTwitter className="footer__icons-items" />
        <FaYoutube className="footer__icons-items" />
        <FaFacebook className="footer__icons-items" />
      </div>

      <ul className="footer__links">
        <li className="footer__links-items">Press Room</li>

        <li className="footer__links-items">Advertising</li>

        <li className="footer__links-items">Jobs</li>

        <li className="footer__links-items">Conditions of Use</li>

        <li className="footer__links-items">Privacy Policy</li>

        <li className="footer__links-items">Help</li>
      </ul>

      <div className="footer__copyright">© 2022-2023 by Cineplex.com, Inc.</div>
    </div>
  );
}

export default Footer;
