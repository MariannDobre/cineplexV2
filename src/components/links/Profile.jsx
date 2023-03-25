import React, { useState } from "react";
import Nav from "../nav/Nav";
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
      <div className="profile__details">
        {file ? (
          <img className="profile__picture" src={file} alt="Uploaded file" />
        ) : (
          <div className="profile__wrapper">
            <p className="profile__wrapper-title">Upload photo</p>
            <FaUserAlt className="profile__wrapper-icon" />
            <input type="file" onChange={handleFileUpload} />
          </div>
        )}
        <p className="profile__username">
          Username: <span>admin</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
