import logo from "../assets/logo.png";

export function Logo({ className = "h-8 w-8" }) {
  return (
    <img
      src={logo}
      alt=""
      width="32"
      height="32"
      className={`logo-mark ${className}`}
    />
  );
}
