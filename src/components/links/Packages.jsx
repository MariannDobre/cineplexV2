import React, { useState, useEffect } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { packages } from "../packages";
import "./Packages.scss";
import { FcApproval } from "react-icons/fc";
import { FaRedoAlt, FaBan } from "react-icons/fa";

function Packages() {
  const [buy, setBuy] = useState(false);
  const [validate, setValidate] = useState(false);
  const [inputFilled, setInputFilled] = useState({
    email: "",
    password: "",
    cardNumber: "",
    cardCVV: "",
    cardExpirationDate: "",
  });

  const openBuyMenu = () => {
    setBuy(true);
  };

  const closeBuyMenu = () => {
    setBuy(false);
  };

  const openValidate = () => {
    setValidate(true);
  };

  const closeValidate = () => {
    setValidate(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputFilled({
      ...inputFilled,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const allInputsFilled = Object.values(inputFilled).every(
      (value) => value !== ""
    );

    if (allInputsFilled) {
      openValidate(true);
    }
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        closeBuyMenu();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="packages__container">
      <Nav />
      <div className="packages__content">
        <div className="packages__content-box">
          {packages.map((data, index) => (
            <div className="cards__container" key={packages[index].id}>
              <p className="cards__container-tag">{data.tag}</p>
              <p className="cards__container-price">
                {data.price}
                <span>mo</span>
              </p>
              <span className="cards__container-line"></span>
              <div className="cards__container-about">
                <p className="cards__container-quality">
                  <span>Quality:</span> {data.quality}
                </p>

                <p className="cards__container-devices">
                  <span>Max Devices:</span> {data.maxDevices}
                </p>

                <p className="cards__container-support">
                  <span>Support:</span> {data.support}
                </p>
              </div>
              <button className="cards__container-buybtn" onClick={openBuyMenu}>
                Buy Now
              </button>
              {buy && (
                <div className="buy__container-overlay">
                  <div className="buy__container-content">
                    <button
                      className="buy__container-content-closebtn"
                      onClick={closeBuyMenu}
                    >
                      X
                    </button>

                    <p className="buy__container-content-title">
                      Fill all the fields with valid data for verification
                    </p>

                    <div className="buy__container-content-labels">
                      <label>Enter your email</label>
                      <input
                        name="email"
                        type="email"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="buy__container-content-labels">
                      <label>Your account password</label>
                      <input
                        name="password"
                        type="password"
                        onChange={handleInputChange}
                      />
                    </div>

                    <span className="buy__container-content-line"></span>

                    <div className="buy__container-content-cardData">
                      <div className="buy__container-content-labels-2">
                        <label>Card Number</label>
                        <input
                          name="cardNumber"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="buy__container-content-labels-2">
                        <label>Card CVV</label>
                        <input
                          name="cardCVV"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="buy__container-content-labels-2">
                        <label>Card Expiration Date</label>
                        <input
                          name="cardExpirationDate"
                          type="text"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <button
                      className="buy__container-content-submitBtn"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    {validate && (
                      <div className="validation__container">
                        <p className="validation__container-title">
                          <FcApproval className="validation__container-title-icon" />{" "}
                          Validation succes
                        </p>
                        <div className="validation__container-buttonsBox">
                          <button
                            className="validation__container-buttonsBox-package"
                            onClick={() => {
                              closeBuyMenu();
                              closeValidate();
                            }}
                          >
                            To Packages <FaRedoAlt />
                          </button>

                          <button
                            className="validation__container-buttonsBox-cancel"
                            onClick={closeValidate}
                          >
                            Cancel <FaBan />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Packages;
