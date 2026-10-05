import Card from "./Card";

interface Props {
  icon: string;
  title: string;
  value: string | number;
  subtitle?: string;
}

export default function StatCard({
  icon,
  title,
  value,
  subtitle,
}: Props) {
  return (
    <Card>

      <div className="text-3xl">
        {icon}
      </div>

      <p className="mt-4 text-gray-500">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-black text-yellow-600">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-gray-500">
          {subtitle}
        </p>
      )}

    </Card>
  );
}