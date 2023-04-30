import  React, { ButtonHTMLAttributes, FC, memo } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button:FC<ButtonProps> = ({className,  ...rest}) => (
  
            <button
              className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" + className } {...rest} />
);

export default memo(Button);