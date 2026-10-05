import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full bg-yellow-100 px-5 py-2 font-semibold text-yellow-700">
      {children}
    </span>
  );
}