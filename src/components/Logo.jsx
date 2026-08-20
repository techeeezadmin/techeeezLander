export function Logo({ className = "h-7 w-7" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={`logo-mark ${className}`}
    >
      <rect
        className="sq-a"
        x="3.5"
        y="3.5"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        className="sq-b"
        x="12.5"
        y="12.5"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="11.5" cy="11.5" r="1.4" fill="currentColor" />
    </svg>
  );
}
