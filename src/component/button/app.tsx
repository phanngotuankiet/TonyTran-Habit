/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import "./app.css";
export interface ButtonProps {
  label: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
