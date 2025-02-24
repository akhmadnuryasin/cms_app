import React from "react";
import { Label } from "./Label";
import { Input } from "./Input";

interface Props {
  type: string;
  placeholder: string;
  text: string;
  htmlFor: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm: React.FC<Props> = ({
  type,
  placeholder,
  text,
  htmlFor,
  icon,
  value,
  onChange,
}) => {
  return (
    <div>
      <Label text={text} htmlFor={htmlFor} />
      <div className="relative mt-2">
        <Input
          value={value}
          type={type}
          placeholder={placeholder}
          icon={icon}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
