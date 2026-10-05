interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ExerciseSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search exercises..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-yellow-200 bg-white px-5 py-4 text-lg outline-none focus:border-yellow-400"
    />
  );
}