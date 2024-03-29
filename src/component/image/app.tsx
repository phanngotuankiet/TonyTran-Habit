/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import React from "react";
export interface ImageProps {
  img: string;
  id: number;
}
const Image: React.FC<ImageProps> = ({ img }) => {
  return (
    <div>
      <img src={img} alt="Image description" />
    </div>
  );
};

export default Image;
