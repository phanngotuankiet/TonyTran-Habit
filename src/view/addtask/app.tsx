/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./addtask.css";
import Input from "../../component/form/input/app";
import Button from "../../component/button/app";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/reducer/taskStore";

interface RepeatOption {
  label: string;
  selected?: boolean; // Optional property for selected option
}

const repeatOptions: RepeatOption[] = [
  { label: "Daily", selected: false },
  { label: "Weekly", selected: true }, // Set "Weekly" as selected initially
  { label: "Monthly", selected: false },
];

const weekDays: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

interface AddTaskProps {}

export const AddTask: React.FC = () => {
  const [newTask, setNewTask] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [selectedRepeat, setSelectedRepeat] = useState(repeatOptions[1]); // Set initial selected repeat
  const dispatch = useDispatch();

  const handleRepeatChange = (option: RepeatOption) => {
    setSelectedRepeat(option);
  };

  const handleDaySelection = (day: string) => {
    // Implement logic to handle day selection (toggle selection etc.)
  };

  return (
    <div className="add-task-container">
      <div className="add-task-header">
        <div className="title">
          <span>⭐</span> New Task
        </div>
      </div>

      <div className="add-task-body">
        <div className="task-details">
          <Input
            placeholder="Name your new task"
            value={newTask}
            onChange={(e: any) => setNewTask(e.target.value)}
            type="text"
          />
          <Input
            placeholder="Describe it"
            value={newDesc}
            onChange={(e: any) => setNewDesc(e.target.value)}
            type="text"
          />
        </div>
        <div className="card-color-section">
          <p className="card-color-label">Card Color</p>
          <div className="circles" style={{ display: "flex" }}>
            <div className="circle circle--emerald" />
            <div className="circle circle--fuchsia" />
            <div className="circle circle--orange" />
            <div className="circle circle--teal" />
            <div className="circle circle--red" />
            <div className="circle circle--yellow" />
            <div className="circle circle--indigo" />
            <div className="circle circle--fuchsia-dark" />
          </div>
        </div>
        <div className="repeat-section">
          <p className="repeat-label">Repeat</p>
          <div className="repeat-options">
            {repeatOptions.map((option) => (
              <div
                key={option.label}
                className={`repeat-option ${option.selected ? "selected" : ""}`}
                onClick={() => handleRepeatChange(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
          {selectedRepeat.label === "Weekly" && (
            <div className="week-days">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="week-day"
                  onClick={() => handleDaySelection(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          )}
          {selectedRepeat.label !== "Daily" && (
            <div className="repeat-frequency">
              <p>Repeat</p>
              <div className="repeat-frequency-input">
                <input type="number" />
                <div className="repeat-frequency-unit">
                  {selectedRepeat.label === "Weekly" ? "week" : "month"}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="tags-section">
          <p className="tags-label">Tags</p>
          <div className="tags-input">
            <input type="text" placeholder="Add a tag" />
          </div>
          <div className="existing-tags">
            <div className="tag">Daily Routine</div>
            <div className="tag">Study Routine</div>
            <div className="tag">Add More ++ </div>
          </div>
        </div>
      </div>
      <div className="add-task-footer">
        <Button
          label="Add Task"
          onClick={() =>
            dispatch(
              addTask({
                icon: "",
                label: newTask,
                color: "",
              })
            )
          }
        />
      </div>
    </div>
  );
};

export default AddTask;
