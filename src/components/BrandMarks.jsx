function Mark({ children }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6 text-white"
    >
      {children}
    </svg>
  );
}

const marks = {
  Loft64: (
    <Mark>
      <path d="M6 20V8h4v8h8v4H6Z" stroke="currentColor" strokeWidth="1.5" />
    </Mark>
  ),
  "Audio Monkeys": (
    <Mark>
      <path
        d="M8 16c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </Mark>
  ),
  "Aura Eye Hospital": (
    <Mark>
      <ellipse cx="14" cy="14" rx="9" ry="5.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </Mark>
  ),
  "Airway Management": (
    <Mark>
      <path
        d="M5 18c4-8 14-8 18 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M9 12h10" stroke="currentColor" strokeWidth="1.5" />
    </Mark>
  ),
  "Klick n Capture Studioz": (
    <Mark>
      <rect x="6" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
    </Mark>
  ),
};

export function BrandMark({ name }) {
  return marks[name] ?? (
    <Mark>
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
    </Mark>
  );
}
