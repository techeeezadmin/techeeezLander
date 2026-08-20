import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { prefersReducedMotion } from "../lib/motion";

export function PageTransition() {
  const { pathname } = useLocation();
  const first = useRef(true);
  const [phase, setPhase] = useState("");

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return undefined;
    }
    if (prefersReducedMotion()) return undefined;

    setPhase("is-entering");
    const hold = window.setTimeout(() => setPhase("is-leaving"), 280);
    const done = window.setTimeout(() => setPhase(""), 620);
    return () => {
      window.clearTimeout(hold);
      window.clearTimeout(done);
    };
  }, [pathname]);

  return <div className={`page-cover ${phase}`} aria-hidden="true" />;
}
