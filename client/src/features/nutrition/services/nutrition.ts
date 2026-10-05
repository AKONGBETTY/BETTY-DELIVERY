import { supabase } from "@/lib/supabase";

export type NutritionMeal = {
  name: string;
  items: string[];
  calories: number;
  color: string;
};

const STORAGE_KEY = "betty-meal-plan";

export const defaultMeals: NutritionMeal[] = [
  {
    name: "Breakfast",
    items: ["Oatmeal with berries", "Greek yogurt", "Chia seeds"],
    calories: 420,
    color: "bg-yellow-100",
  },
  {
    name: "Lunch",
    items: ["Quinoa bowl", "Roasted chicken", "Spinach and avocado"],
    calories: 560,
    color: "bg-amber-100",
  },
  {
    name: "Dinner",
    items: ["Salmon", "Sweet potato", "Steamed greens"],
    calories: 610,
    color: "bg-orange-100",
  },
];

const colorOptions = [
  "bg-yellow-100",
  "bg-amber-100",
  "bg-orange-100",
  "bg-emerald-100",
  "bg-rose-100",
  "bg-sky-100",
];

export function normalizeMeal(meal: Partial<NutritionMeal> | null | undefined): NutritionMeal {
  const color = meal?.color || "bg-yellow-100";

  return {
    name: meal?.name || "New meal",
    items: Array.isArray(meal?.items) ? meal.items.filter(Boolean) : ["Add item"],
    calories: Number(meal?.calories) || 0,
    color: colorOptions.includes(color) ? color : "bg-yellow-100",
  };
}

export function readMealsFromStorage(): NutritionMeal[] {
  if (typeof window === "undefined") {
    return defaultMeals;
  }

  try {
    const savedMeals = window.localStorage.getItem(STORAGE_KEY);
    if (!savedMeals) {
      return defaultMeals;
    }

    const parsedMeals = JSON.parse(savedMeals) as Partial<NutritionMeal>[];
    if (!Array.isArray(parsedMeals) || parsedMeals.length === 0) {
      return defaultMeals;
    }

    return parsedMeals.map((meal) => normalizeMeal(meal));
  } catch {
    return defaultMeals;
  }
}

export function saveMealsToStorage(meals: NutritionMeal[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(meals));
}

export async function fetchMealsForUser(userId?: string): Promise<NutritionMeal[]> {
  if (!userId || !supabase) {
    return readMealsFromStorage();
  }

  const { data, error } = await supabase
    .from("nutrition_meals")
    .select("meal_name, calories, items, color")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (error || !data) {
    return readMealsFromStorage();
  }

  const normalizedMeals = data.map((meal) =>
    normalizeMeal({
      name: meal.meal_name ?? "Meal",
      calories: Number(meal.calories) || 0,
      items: Array.isArray(meal.items) ? meal.items : [],
      color: meal.color ?? "bg-yellow-100",
    }),
  );

  return normalizedMeals.length > 0 ? normalizedMeals : readMealsFromStorage();
}

export async function saveMealsForUser(userId: string | undefined, meals: NutritionMeal[]) {
  if (!userId || !supabase) {
    saveMealsToStorage(meals);
    return;
  }

  const { error: deleteError } = await supabase.from("nutrition_meals").delete().eq("user_id", userId);
  if (deleteError) {
    throw deleteError;
  }

  if (meals.length === 0) {
    return;
  }

  const rows = meals.map((meal, index) => ({
    user_id: userId,
    meal_name: meal.name || `Meal ${index + 1}`,
    meal_type: "meal",
    calories: Number(meal.calories) || 0,
    items: Array.isArray(meal.items) && meal.items.length > 0 ? meal.items : ["Add item"],
    color: meal.color || "bg-yellow-100",
  }));

  const { error: insertError } = await supabase.from("nutrition_meals").insert(rows);
  if (insertError) {
    throw insertError;
  }
}

export function parseItems(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
