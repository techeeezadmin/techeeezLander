export function ProjectPreview({ project, index, x, y }) {
  if (!project) return null;

  return (
    <div
      className="pointer-events-none fixed z-40 hidden w-48 overflow-hidden rounded-xl border border-white/15 bg-[#1C1C22] p-3 shadow-2xl md:block"
      style={{ left: x + 18, top: y + 18 }}
      aria-hidden="true"
    >
      <div
        className="mb-3 h-20 rounded-lg"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.accent}88, #24242B 70%)`,
        }}
      />
      <p className="text-[11px] tracking-[0.16em] text-[#A1A1AA]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="mt-1 text-sm font-medium">{project.name}</p>
    </div>
  );
}
