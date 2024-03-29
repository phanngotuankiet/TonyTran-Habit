/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Button from "../../component/button/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    return navigate("/login");
  };
  const handleCreate = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div>
        <div style={{ fontSize: "64px", marginBottom: "50px", height: "" }}>
          Do your tasks quickly and easy
        </div>
        <div style={{ fontSize: "18px", marginBottom: "100px" }}>
          Your tasks, your rules, our support.
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "30px" }}>
          <Button label="Login" onClick={handleButton} />
          <div style={{ cursor: "pointer" }} onClick={handleCreate}>
            Create An Account
          </div>
        </div>
        <span>Or</span>
        <div className="container-icon" style={{ marginRight: "20px" }}>
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#4285F4" }} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faGoogle} />
          </div>
          <div className="icon">
            <FontAwesomeIcon icon={faApple} />
          </div>
        </div>
      </div>
    </div>
  );
};
