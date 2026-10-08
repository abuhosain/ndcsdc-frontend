"use client";

import React from "react";
import { cn } from "@/utils/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="label-base">
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "input-base",
              leftIcon && "pl-10",
              error && "border-red-400 focus:border-red-500 focus:ring-red-200",
              className,
            )}
            {...props}
          />
        </div>

        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        {!error && hint && <p className="mt-1 text-xs text-gray-400">{hint}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
