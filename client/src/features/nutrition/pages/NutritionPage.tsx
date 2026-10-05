import { useEffect, useMemo, useState } from "react";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import { useAuth } from "@/context/AuthContext";
import {
  defaultMeals,
  fetchMealsForUser,
  parseItems,
  readMealsFromStorage,
  saveMealsForUser,
  saveMealsToStorage,
  type NutritionMeal,
} from "@/features/nutrition/services/nutrition";

const goals = [
  { label: "Protein", value: "110g", detail: "Target reached" },
  { label: "Hydration", value: "2.4L", detail: "1.1L left" },
  { label: "Iron", value: "18mg", detail: "From spinach + lentils" },
];

const colorOptions = [
  "bg-yellow-100",
  "bg-amber-100",
  "bg-orange-100",
  "bg-emerald-100",
  "bg-rose-100",
  "bg-sky-100",
];

export default function NutritionPage() {
  const { user } = useAuth();
  const [meals, setMeals] = useState<NutritionMeal[]>(defaultMeals);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let active = true;

    const loadMeals = async () => {
      try {
        const nextMeals = await fetchMealsForUser(user?.id);
        if (active) {
          setMeals(nextMeals);
        }
      } catch {
        if (active) {
          setMeals(readMealsFromStorage());
        }
      } finally {
        if (active) {
          setIsLoaded(true);
        }
      }
    };

    void loadMeals();

    return () => {
      active = false;
    };
  }, [user?.id]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (user?.id) {
      void saveMealsForUser(user.id, meals).catch(() => saveMealsToStorage(meals));
      return;
    }

    saveMealsToStorage(meals);
  }, [isLoaded, meals, user?.id]);

  const totalCalories = useMemo(
    () => meals.reduce((sum, meal) => sum + Number(meal.calories || 0), 0),
    [meals],
  );

  const updateMeal = (index: number, field: keyof NutritionMeal, value: string | number | string[]) => {
    setMeals((currentMeals) =>
      currentMeals.map((meal, mealIndex) => {
        if (mealIndex !== index) {
          return meal;
        }

        return {
          ...meal,
          [field]: value,
        };
      }),
    );
  };

  const addMeal = () => {
    setMeals((currentMeals) => [
      ...currentMeals,
      {
        name: "New meal",
        items: ["Add item"],
        calories: 300,
        color: "bg-yellow-100",
      },
    ]);
  };

  const removeMeal = (index: number) => {
    setMeals((currentMeals) => currentMeals.filter((_, mealIndex) => mealIndex !== index));
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <SectionTitle title="Nutrition" subtitle="Simple meals, steady energy, and healthy habits for this trimester" emoji="🥗" />

      <div className="grid gap-6 md:grid-cols-3">
        {goals.map((goal) => (
          <Card key={goal.label} className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">{goal.label}</p>
            <h3 className="mt-4 text-3xl font-black text-yellow-600">{goal.value}</h3>
            <p className="mt-2 text-sm text-gray-600">{goal.detail}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-black text-gray-900">Today’s meal plan</h2>

            <div className="flex items-center gap-3">
              {isAdmin && (
                <button
                  type="button"
                  onClick={addMeal}
                  className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700"
                >
                  Add meal
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsAdmin((current) => !current)}
                className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700"
              >
                {isAdmin ? "Exit admin" : "Admin edit"}
              </button>
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
                {totalCalories} kcal
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {meals.map((meal, index) => (
              <div key={`${meal.name}-${index}`} className={`rounded-2xl p-5 ${meal.color}`}>
                {isAdmin ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <input
                        aria-label={`Meal name ${index + 1}`}
                        value={meal.name}
                        onChange={(event) => updateMeal(index, "name", event.target.value)}
                        className="w-full rounded-xl border border-yellow-200 bg-white px-3 py-2 text-xl font-bold text-gray-900 outline-none focus:border-yellow-400"
                      />
                      <button
                        type="button"
                        onClick={() => removeMeal(index)}
                        className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Calories
                        <input
                          type="number"
                          min="0"
                          value={meal.calories}
                          onChange={(event) => updateMeal(index, "calories", Number(event.target.value) || 0)}
                          className="mt-1 w-full rounded-xl border border-yellow-200 bg-white px-3 py-2 outline-none focus:border-yellow-400"
                        />
                      </label>

                      <label className="block text-sm font-medium text-gray-700">
                        Color
                        <select
                          value={meal.color}
                          onChange={(event) => updateMeal(index, "color", event.target.value)}
                          className="mt-1 w-full rounded-xl border border-yellow-200 bg-white px-3 py-2 outline-none focus:border-yellow-400"
                        >
                          {colorOptions.map((color) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <label className="block text-sm font-medium text-gray-700">
                      Meal items (comma separated)
                      <textarea
                        value={meal.items.join(", ")}
                        onChange={(event) => updateMeal(index, "items", parseItems(event.target.value))}
                        className="mt-1 min-h-24 w-full rounded-xl border border-yellow-200 bg-white px-3 py-2 outline-none focus:border-yellow-400"
                      />
                    </label>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-gray-900">{meal.name}</h3>
                      <span className="text-sm font-semibold text-gray-700">{meal.calories} kcal</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-gray-700">
                      {meal.items.map((item) => (
                        <li key={`${meal.name}-${item}`} className="flex items-center gap-2">
                          <span className="text-yellow-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-gray-900">Smart reminder</h2>
          <div className="mt-6 space-y-4 text-sm text-gray-700">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="font-bold text-emerald-700">Best choice today</p>
              <p className="mt-2">Add a citrus fruit or leafy greens to boost folate and hydration.</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-4">
              <p className="font-bold text-amber-700">Avoid</p>
              <p className="mt-2">Too much caffeine and skipped meals can increase fatigue and dizziness.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
