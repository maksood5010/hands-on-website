type AuroraGlowProps = {
  className?: string;
  color: string;
  size?: number;
  blur?: number;
  duration?: number;
  delay?: number;
};

/** A large blurred, slowly drifting radial blob used behind hero/section content. */
export default function AuroraGlow({
  className = "",
  color,
  size = 520,
  blur = 130,
  duration = 16,
  delay = 0,
}: AuroraGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
        animation: `auroraDrift ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}
