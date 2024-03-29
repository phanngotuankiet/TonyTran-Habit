import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.css";
/* eslint-disable @typescript-eslint/no-unused-vars */
interface ProfileProps {
  label: string;
}
const dataProfie: ProfileProps[] = [
  {
    label: "Account",
  },
  {
    label: "Notifications",
  },
  {
    label: "Help",
  },
  {
    label: "Storage and Data",
  },
  {
    label: "Invite a friend",
  },
  {
    label: "Log out",
  },
];
export const Profile: React.FC = () => {
  return (
    <div>
      <div>Profile</div>

      <div>
        {dataProfie.map((data) => {
          return (
            <div
              className="suggestion-action"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginLeft: "10px" }}>{data.label}</div>
              <FontAwesomeIcon
                icon={faRightLong}
                style={{ marginRight: "10px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
