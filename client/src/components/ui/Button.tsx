import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition duration-200",

        variant === "primary" &&
          "bg-yellow-500 text-black hover:bg-yellow-400",

        variant === "secondary" &&
          "bg-black text-white hover:bg-gray-800",

        variant === "outline" &&
          "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}