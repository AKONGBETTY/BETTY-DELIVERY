interface Props {
  youtube: string;
}

export default function ExerciseVideoButton({
  youtube,
}: Props) {
  return (
    <a
      href={youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
    >
      ▶ Watch Exercise Video
    </a>
  );
}