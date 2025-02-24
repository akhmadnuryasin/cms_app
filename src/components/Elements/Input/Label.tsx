import React from "react";

interface Props {
  text: string;
  htmlFor: string;
}

export const Label: React.FC<Props> = ({ text, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-md font-medium text-gray-700"
    >
      {text}
    </label>
  );
};
