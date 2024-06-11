/* eslint-disable react/display-name */
import React, { InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  onChange?: (value: string | any) => void;
  value?: string;
  type?: "text" | "email" | "password" | "date" | "number";
  helpText?: string;

  label: string;
}

export const Input = React.forwardRef(
  (
    {
      id,
      onChange,
      value,
      label,
      type = "text",
      helpText,
      ...props
    }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div className="relative w-full flex flex-col gap-1">
        <label htmlFor={id} className="pr-1 pl-1 transition-all">
          {label}
        </label>
        <input
          type={type}
          id={id}
          onChange={onChange}
          className=" w-full h-14 rounded-lg outline-none border border-gray-300 focus:ring-1 focus:border-0 focus:ring-green-100 placeholder: pl-4 placeholder-transparent"
          value={value}
          ref={ref}
          {...props}
        />

        <div className="h-1">
          {helpText && (
            <p className="text-[12px] pl-2 text-rose-600">{helpText}</p>
          )}
        </div>
      </div>
    );
  },
);
