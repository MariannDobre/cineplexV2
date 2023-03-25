import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../account";
import Home from "../main/Home";
import "./LogIn.scss";

function LogIn() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (username === account.username && password === account.password) {
      setIsLoggedIn(true);
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="login__container">
      {isLoggedIn ? (
        <Home />
      ) : (
        <>
          <h1 className="login__container-title">
            Cine<span>Plex</span>
          </h1>
          <div className="login__container-bg">
            <h2 className="login__container-subtitle">Login</h2>
            <form className="login__container-form" onSubmit={handleLogin}>
              <input
                className="login__container-input"
                type="text"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
              <label className="login__container-label">
                <span className="login__container-span">Username:</span>
              </label>
            </form>

            <form className="login__container-form" onSubmit={handleLogin}>
              <input
                className="login__container-input"
                type="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
              <label className="login__container-label">
                <span className="login__container-span">Password:</span>
              </label>

              <button className="login__container-submit" type="submit">
                Sign In
              </button>
            </form>
            {error && (
              <p className="login__container-error slide-right">{error}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default LogIn;
