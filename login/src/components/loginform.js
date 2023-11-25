import React, { useState } from "react";

import "./loginform.css";

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");
  const [tenderee, setTenderee] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === "arish" && password === "123456" && tenderee) {
      window.location.href =
        "https://thirdweb.com/sepolia/0xc8C8c12D1C48D0C539b727B2d980b4bCC89ed1Ca/explorer";
    }

    if (username === "bhathri" && password === "123456" && !tenderee) {
      window.location.href =
        "https://thirdweb.com/sepolia/0xc8C8c12D1C48D0C539b727B2d980b4bCC89ed1Ca/explorer";
    }
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <div className="alt-login">
        <div
          className={!tenderee ? "clicked" : ""}
          onClick={() => {
            setTenderee(false);
            setUsername("");
            setPassword("");
          }}
        >
          Tenderer
        </div>
        <div
          className={tenderee ? "clicked" : ""}
          onClick={() => {
            setTenderee(true);
            setUsername("");
            setPassword("");
          }}
        >
          Tenderee
        </div>
      </div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUser}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePassword}
      />

      <div className="login-btn" onClick={handleLogin}>
        Login
      </div>

      <div className="register-btn">
        Not a user? <a>Sign in</a>
      </div>


    </div>
  );
};

export default LoginForm;
