import React, { useState } from "react";
import Eye from "../../assets/icons/Eye.svg";
import EyeSlash from "../../assets/icons/EyeSlash.svg";

interface InputFormProps {
  type?: string;
  placeholder: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

function InputForm({
  type = "text",
  placeholder,
  leftIcon,
  rightIcon,
  value,
  onChange,
}: InputFormProps) {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="relative inline-block justify-center items-center py-3 px-5 w-full bg-textW rounded-[1.25rem]">
      <div className="flex justify-center items-center">
        {leftIcon && <span className="absolute left-9 mr-4">{leftIcon}</span>}
        <div className="w-full ml-12">
          <input
            type={inputType}
            className="placeholder:text-bg focus:outline-none mr-4 w-[80%] text-bg"
            placeholder={placeholder}
            value={value} // Set value from props
            onChange={handleChange} // Call handleChange on change
          />
        </div>
        {type === "password" && (
          <button
            className="inline-block box-border"
            onClick={togglePasswordVisibility}
          >
            {inputType === "password" ? (
              <img src={Eye} alt="" />
            ) : (
              <img src={EyeSlash} alt="" />
            )}
          </button>
        )}
        {rightIcon && (
          <span className="absolute right-9 mr-4">{rightIcon}</span>
        )}
      </div>
    </div>
  );
}

export default InputForm;
