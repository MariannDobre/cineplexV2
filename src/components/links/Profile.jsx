import React, { useState } from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { FaUserAlt } from "react-icons/fa";
import "./Profile.scss";

function Profile() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="profile__container">
      <Nav />
      <div className="profile__content">
        <div className="profile__content-box">
          {file ? (
            <img
              className="profile__content-picture"
              src={file}
              alt="Uploaded file"
            />
          ) : (
            <div className="profile__content-wrapper">
              <p className="profile__content-wrapper-title">Upload a photo</p>
              <FaUserAlt className="profile__content-wrapper-icon" />
              <label
                htmlFor="fileInput"
                className="profile__content-wrapper-label"
              >
                {file ? file.name : "Choose a file"}
              </label>
              <input
                id="fileInput"
                className="profile__content-wrapper-input"
                type="file"
                onChange={handleFileUpload}
              />
            </div>
          )}
          <p className="profile__content-username">
            Username: <span>admin</span>
          </p>
          <p className="profile__content-password">
            Current Password: <span>***</span>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
