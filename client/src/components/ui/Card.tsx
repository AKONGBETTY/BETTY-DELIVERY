import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-yellow-100 bg-white p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}