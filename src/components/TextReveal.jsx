export function TextReveal({
  as: Tag = "h2",
  lines,
  className = "",
  accentIndex = -1,
}) {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span
          className="reveal-line"
          key={`${line}-${index}`}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <span
            className={
              index === accentIndex ? "font-serif italic font-normal" : undefined
            }
            style={{ animationDelay: `${80 + index * 90}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
