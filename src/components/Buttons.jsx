import { Link } from "react-router-dom";

const shared =
  "group inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]";

export function PrimaryButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      data-cursor="button"
      className={`${shared} bg-white text-black hover:scale-[1.02] hover:bg-[#F5F5F5] ${className}`}
      {...props}
    >
      {children}
      <span className="btn-arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

export function SecondaryButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      data-cursor="button"
      className={`${shared} border border-white/10 bg-[#2A2A32] text-white hover:bg-[#35353E] ${className}`}
      {...props}
    >
      {children}
      <span className="btn-arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}

export function SubmitButton({ children, loading = false, className = "" }) {
  return (
    <button
      type="submit"
      data-cursor="button"
      disabled={loading}
      className={`${shared} bg-white text-black hover:scale-[1.02] hover:bg-[#F5F5F5] disabled:opacity-60 ${className}`}
    >
      {loading ? "Sending…" : children}
      {loading ? null : (
        <span className="btn-arrow" aria-hidden>
          →
        </span>
      )}
    </button>
  );
}
