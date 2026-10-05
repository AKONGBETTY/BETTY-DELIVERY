import type { ButtonHTMLAttributes } from "react";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        rounded-2xl
        bg-yellow-400
        px-6
        py-3
        font-bold
        text-black
        transition-all
        hover:scale-105
        hover:bg-yellow-300
        ${className}
      `}
    >
      {children}
    </button>
  );
}