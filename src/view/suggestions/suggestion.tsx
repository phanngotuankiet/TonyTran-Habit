/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../component/button/app";
import React from "react";
import "./suggest.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/reducer/taskStore";

export interface SuggestProp {
  icon: any;
  category: any;
  description: any;
  subcategories: any;
}
const dataSuggest: SuggestProp[] = [
  {
    icon: "🧠",
    category: "Learn and study more",
    description: "Stay hungry for knowledge",
    subcategories: [
      {
        label: "Read",
        icon: "📖",
        color: "#FFEE93",
      },
      {
        label: "Study",
        icon: "✏️",
        color: "#ADF7B6",
      },
    ],
  },
  {
    icon: "🏋️‍♂️",
    category: "Exercise",
    description: "Become your best version",
    subcategories: [
      {
        label: "Running",
        icon: "🏃‍️",
        color: "#BDE0FE",
      },
      {
        label: "Cycling",
        icon: "🚴‍",
        color: "#FFC09F",
      },
    ],
  },
  {
    icon: "🧹",
    category: "Clean and Organize",
    description: "Get your life together",
    subcategories: [
      {
        label: "Mop the house",
        icon: "🪣",
        color: "#FCF5C7",
      },
      {
        label: "Clean the bathroom",
        icon: "🚽",
        color: "#F3C4FB",
      },
    ],
  },
];

export const Suggestion: React.FC<SuggestProp> = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleAddMore = () => {
    navigate("/addtask");
  };

  return (
    <div>
      {dataSuggest.map((data) => (
        <div className="suggest-container" style={{ marginBottom: "20px" }}>
          <div className="suggestion-item" style={{ height: "250px" }}>
            <div className="suggestion-title">{data.category}</div>
            <div className="suggestion-description">{data.description}</div>
            <div>
              {data.subcategories.map((label: any) => (
                <div className="suggestion-actions">
                  <div
                    className="suggestion-action"
                    style={{ backgroundColor: `${label.color}` }}
                  >
                    <div style={{ marginLeft: "5px" }}> {label.icon}</div>
                    <div style={{ marginLeft: "5px" }}>{label.label}</div>
                  </div>
                  <div
                    className="suggestion-icon"
                    onClick={() =>
                      dispatch(
                        addTask({
                          icon: label.icon,
                          label: label.label,
                          color: label.color,
                        })
                      )
                    }
                  >
                    +
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Button label="Add More" onClick={handleAddMore} />
    </div>
  );
};
