/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { faCalendarDays, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faDumbbell,
  faList,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./todo.css";
import Button from "../../component/button/app";
import { useNavigate } from "react-router-dom";
import { Menu } from "../menu/menu";
export interface TodoProps {
  text: string;
  icon: any;
}
const data: TodoProps[] = [
  {
    text: "Plan the day's tasks",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Set Goals",
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    text: "Take Breaks",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Move and refresh",
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    text: "Prioritize",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Break tasks down",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "No multitasking",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Minimize distractions",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
  {
    text: "Limit social media",
    icon: <FontAwesomeIcon icon={faSun} />,
  },
];
export const Todo: React.FC = () => {
  const navigate = useNavigate();
  const handleCalendar = () => {
    return navigate("/calendar");
  };
  return (
    <div className="todo-container">
      <div className="header">
        <div className="title">Let's make a contract</div>
      </div>
      <div className="content">
        <span className="label">I will</span>
        <ul>
          {data.map((todo) => (
            <li key={todo.text} className="todo-item">
              {todo.icon && <span className="todo-icon">{todo.icon}</span>}
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="agreement">
        <Button label="I Agree" onClick={console.log("")} />
      </div>
      <Menu />
      {/* <div className="container-icon" style={{ marginTop: "50px" }}>
        <div className="icon" onClick={handleCalendar}>
          <FontAwesomeIcon icon={faCalendarDays} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faList} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPerson} />
        </div>
      </div> */}
    </div>
  );
};
