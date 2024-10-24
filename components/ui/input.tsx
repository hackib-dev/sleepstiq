"use client";
import * as React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, leftIcon, rightIcon, type, value, onChange, ...props },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-10">
            {leftIcon}
          </span>
        )}
        <input
          type={type === "password" ? (show ? "text" : "password") : type}
          className={cn(
            "flex h-10 w-full rounded-md  bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-transparent disabled:cursor-not-allowed disabled:opacity-50",
            leftIcon && "pl-20",
            rightIcon && "pr-20",
            className
          )}
          ref={ref}
          value={value ?? ""}
          onChange={onChange}
          {...props}
        />
        {type === "password" || rightIcon ? (
          <span className="absolute inset-y-0 right-0 flex items-center  px-3 rounded-md">
            {!rightIcon && (
              <Button
                aria-label="toggle show password"
                onClick={handleClick}
                size="sm"
                type="button"
                className="text-muted-foreground"
              >
                {show ? <FaEyeSlash size="12" /> : <FaEye size="12" />}
              </Button>
            )}
            {rightIcon}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
