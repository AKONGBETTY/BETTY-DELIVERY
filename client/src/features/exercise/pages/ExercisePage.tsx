import { useEffect, useState } from "react";

import Card from "@/components/ui/Card";
import ExerciseSearch from "../components/ExerciseSearch";
import ExerciseHero from "../components/ExerciseHero";
import ExerciseCategory from "../components/ExerciseCategory";
import StageSelector from "../components/StageSelector";

import { exercises as exerciseData } from "../data/exercises";
import type { Exercise, ExerciseStage } from "../types/exercise";

export default function ExercisePage() {
  const [search, setSearch] = useState("");

  const [selectedStage, setSelectedStage] =
    useState<ExerciseStage>("Third Trimester");

  const [exercises, setExercises] = useState<Exercise[]>(() => {
    const saved = localStorage.getItem("exercise-progress");

    return saved ? JSON.parse(saved) : exerciseData;
  });

  // Search exercises
  const filteredExercises = exercises.filter((exercise) =>
    exercise.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Exercises for selected stage
  const stageExercises = filteredExercises.filter(
    (exercise) => exercise.stage === selectedStage
  );

  // Completed exercises for selected stage
  const completedStageExercises = stageExercises.filter(
    (exercise) => exercise.completed
  ).length;

  // Progress for selected stage
  const stageProgress =
    stageExercises.length > 0
      ? Math.round(
          (completedStageExercises / stageExercises.length) * 100
        )
      : 0;

  // Toggle exercise completion
  const toggleCompleted = (id: number) => {
    setExercises((prev) =>
      prev.map((exercise) =>
        exercise.id === id
          ? {
              ...exercise,
              completed: !exercise.completed,
            }
          : exercise
      )
    );
  };

  // Save progress
  useEffect(() => {
    localStorage.setItem(
      "exercise-progress",
      JSON.stringify(exercises)
    );
  }, [exercises]);

  // Reset progress
  const resetProgress = () => {
    localStorage.removeItem("exercise-progress");

    setExercises(
      exerciseData.map((exercise) => ({
        ...exercise,
        completed: false,
      }))
    );
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8">

      {/* Hero */}
      <ExerciseHero />

      {/* Search */}
      <ExerciseSearch
        value={search}
        onChange={setSearch}
      />

      {/* Stage Selector */}
      <StageSelector
        value={selectedStage}
        onChange={setSelectedStage}
      />

      {/* Stage Progress */}
      <Card>

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold">
              {selectedStage} Progress
            </h2>

            <p className="mt-1 text-gray-600">
              {completedStageExercises} of{" "}
              {stageExercises.length} exercises completed
            </p>
          </div>

          <span className="text-2xl font-black text-yellow-500">
            {stageProgress}%
          </span>

        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-4 overflow-hidden rounded-full bg-yellow-100">

          <div
            className="h-full rounded-full bg-yellow-400 transition-all duration-500"
            style={{
              width: `${stageProgress}%`,
            }}
          />

        </div>

        {/* Reset */}
        <button
          onClick={resetProgress}
          className="mt-5 rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          Reset Progress
        </button>

      </Card>

      {/* Selected Stage Exercises */}
      <ExerciseCategory
        emoji={
          selectedStage === "Third Trimester"
            ? "🤰"
            : selectedStage === "Postpartum 24 Hours"
            ? "🍼"
            : selectedStage === "Postpartum Week 1"
            ? "🌸"
            : selectedStage === "Postpartum Weeks 2-6"
            ? "💪"
            : selectedStage === "Postpartum Weeks 6-12"
            ? "🏃"
            : "✨"
        }
        title={selectedStage}
        description={
          selectedStage === "Third Trimester"
            ? "Safe exercises that prepare your body for labour while maintaining strength and flexibility."
            : selectedStage === "Postpartum 24 Hours"
            ? "Gentle breathing and circulation exercises to begin recovery safely."
            : selectedStage === "Postpartum Week 1"
            ? "Very light movements to improve circulation and support healing."
            : selectedStage === "Postpartum Weeks 2-6"
            ? "Restore your core, pelvic floor and overall body strength gradually."
            : selectedStage === "Postpartum Weeks 6-12"
            ? "Progressive strengthening and endurance exercises after medical clearance."
            : "Build full-body fitness and safely return to your preferred activities."
        }
        exercises={stageExercises}
        onToggle={toggleCompleted}
      />

    </main>
  );
}