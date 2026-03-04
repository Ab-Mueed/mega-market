export default function Chevron({ color = "#6b1a2a", className }) {
  return (
    <svg
      className={className}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon points="0,0 50,100 0,100 0,2" fill={color} opacity="0.5" />
      <polygon points="100,0 50,100 100,100 100,2" fill={color} opacity="0.5" />
    </svg>
  );
}
