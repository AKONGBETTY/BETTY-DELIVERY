import { useState } from "react";
import Card from "@/components/ui/Card";

import { todaysTasks } from "../services/tasks";
import type { Task } from "../types/task";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TodaysFocus() {
  const [tasks, setTasks] = useState<Task[]>(todaysTasks);

  function toggleTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const completed = tasks.filter((task) => task.completed).length;

  return (
    <Card>

      <div className="mb-6 flex items-center justify-between">

        <SectionTitle
    emoji="🌼"
    title="Today's Focus"
        />
        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
          {completed}/{tasks.length} Done
        </span>

      </div>

      {/* Progress Bar */}

      <div className="mb-8 h-3 overflow-hidden rounded-full bg-yellow-100">

        <div
          className="h-full rounded-full bg-yellow-500 transition-all duration-500"
          style={{
            width: `${(completed / tasks.length) * 100}%`,
          }}
        />

      </div>

      <div className="space-y-3">

        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex cursor-pointer items-center gap-4 rounded-xl border border-transparent p-4 transition hover:border-yellow-200 hover:bg-yellow-50"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="h-5 w-5 accent-yellow-500"
            />

            <span
              className={
                task.completed
                  ? "text-gray-400 line-through"
                  : ""
              }
            >
              {task.title}
            </span>

          </label>
        ))}

      </div>

    </Card>
  );
}