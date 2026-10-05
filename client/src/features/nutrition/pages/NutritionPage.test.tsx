import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import NutritionPage from "./NutritionPage";

describe("NutritionPage", () => {
  it("shows an admin edit mode for meal updates", () => {
    render(<NutritionPage />);

    fireEvent.click(screen.getByRole("button", { name: /admin edit/i }));

    expect(screen.getByDisplayValue("Breakfast")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add meal/i })).toBeInTheDocument();
  });
});
