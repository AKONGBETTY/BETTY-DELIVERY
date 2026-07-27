import { getPregnancyData } from "../services/pregnancyCalculator";

export default function PregnancyStats() {
  const pregnancy = getPregnancyData();

  const stats = [
    {
      icon: "🤰",
      label: "Current Week",
      value: `Week ${pregnancy.weeks}`,
    },
    {
      icon: "🌸",
      label: "Trimester",
      value: pregnancy.trimester,
    },
    {
      icon: "⏳",
      label: "Days Left",
      value: pregnancy.daysRemaining,
    },
    {
      icon: "📈",
      label: "Progress",
      value: `${pregnancy.percentage}%`,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-yellow-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">{stat.icon}</div>

          <p className="mt-4 text-3xl font-black text-gray-900">
            {stat.value}
          </p>

          <p className="mt-2 text-sm font-medium text-gray-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}