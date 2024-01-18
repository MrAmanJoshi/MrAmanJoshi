import React, { FC, InputHTMLAttributes, memo } from "react";

type InputProps = {
  error?: string; // Make error prop optional
  touched?: boolean; // Make touched prop optional
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, error, touched, ...rest }) => {
  return (
    <>
      <input
        className={
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " +
          className
        }
        {...rest}
      />

      {error && touched && (
        <p className="text-red-500 text-xs italic">{error}</p>
      )}
    </>
  );
};

export default memo(Input);
