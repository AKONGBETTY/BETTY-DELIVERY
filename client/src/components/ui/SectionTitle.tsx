interface SectionTitleProps {
  title: string;
  emoji?: string;
}

export default function SectionTitle({
  title,
  emoji,
}: SectionTitleProps) {
  return (
    <div className="mb-5 flex items-center gap-2">
      {emoji && (
        <span className="text-2xl">
          {emoji}
        </span>
      )}

      <h2 className="text-2xl font-bold text-yellow-700">
        {title}
      </h2>
    </div>
  );
}