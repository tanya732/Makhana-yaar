// Simple inline SVG of a makhana (fox nut) puff — reused as decorative confetti.
export default function Makhana({ className = '', style }) {
  return (
    <svg viewBox="0 0 64 72" className={className} style={style} aria-hidden="true">
      <ellipse cx="32" cy="38" rx="24" ry="30" fill="#F0E9DC" />
      <ellipse cx="32" cy="38" rx="24" ry="30" fill="url(#g)" fillOpacity="0.4" />
      <path d="M32 8c-9 10-12 40 0 56 12-16 9-46 0-56z" fill="#FBF7F0" />
      <circle cx="24" cy="30" r="2.2" fill="#E8622A" fillOpacity="0.5" />
      <circle cx="40" cy="44" r="2.6" fill="#1E2A4A" fillOpacity="0.3" />
      <circle cx="30" cy="52" r="1.8" fill="#E8622A" fillOpacity="0.4" />
      <defs>
        <radialGradient id="g" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F2854E" />
        </radialGradient>
      </defs>
    </svg>
  )
}
