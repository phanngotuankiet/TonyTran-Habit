/* eslint-disable @typescript-eslint/no-unused-vars */
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faList, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const handleCalendar = () => {
    return navigate("/calendar");
  };
  const handleAddTask = () => {
    return navigate("/addtask");
  };
  const handleProfile = () => {
    return navigate("/profile");
  };
  return (
    <div>
      <div className="container-icon" style={{ marginTop: "50px" }}>
        <div className="icon">
          <FontAwesomeIcon icon={faCalendarDays} onClick={handleCalendar} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faList} onClick={handleAddTask} />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faPerson} onClick={handleProfile} />
        </div>
      </div>
    </div>
  );
};
