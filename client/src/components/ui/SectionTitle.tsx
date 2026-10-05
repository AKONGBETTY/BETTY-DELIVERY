interface Props {
  title: string;
  subtitle?: string;
  emoji?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  emoji,
}: Props) {
  return (
    <div className="mb-6 flex items-center gap-3">
      {emoji ? <span className="text-2xl">{emoji}</span> : null}

      <div>
        <h2 className="text-3xl font-black">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}