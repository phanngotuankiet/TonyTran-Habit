/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from "react";
import "./login.css";
import Input from "../../component/form/input/app";
import Button from "../../component/button/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "../menu/menu";

import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  setIsLoading,
  setError,
} from "../../store/reducer/loginUser";

import { RootState } from "../../store/store";
import { ToastContainer, toast } from "react-toastify";
import { NotificationTitleMessage } from "react-notifications-component";
interface LoginStateProps {
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}
const dataUser = [
  {
    email: "admin123",
    password: "123456",
  },
  {
    email: "admin1234",
    password: "1234565",
  },
];

export const Login: React.FC<LoginStateProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const checkUser = useSelector<RootState>((state) => state.auth);

  const navigate = useNavigate();
  const notify = () => {
    toast.success("Login Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleLogin = () => {
    console.log("Login  ");

    const user = dataUser.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);

    if (user) {
      dispatch(loginUser({ email, password }));
      notify();

      navigate("/todo");
    } else {
      dispatch(setError("Email hoặc mật khẩu không hợp lệ"));
    }
    dispatch(setIsLoading(false));
  };

  return (
    <div>
      <div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            color: "#C67ED2",
            fontSize: "18px",
          }}
        >
          Log in to HabitHub
        </div>
        <div
          style={{
            width: "auto",
            height: "40px",
            fontSize: "18px",
          }}
        >
          Welcome back! Sign in using your social account or email to continue
          us
        </div>
      </div>
      <div className="container-icon" style={{ marginRight: "10px" }}>
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

      <span>Or</span>

      <Input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        type="password"
        onChange={(e: any) => setPassword(e.target.value)}
      />

      <Button label="Login" onClick={handleLogin} />

      <Menu />
      <ToastContainer />
    </div>
  );
};
