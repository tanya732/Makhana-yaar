// Fine pen-and-ink doodles recreated from the Makhana Yaar packaging:
// a Mithila-style pond landscape — fishermen in a canoe, rolling hills, palm trees,
// little clouds, a dense reed/lotus field and an ornate bowl piled with fox nuts.
// Thin strokes (0.9–1.2) mimic the etched line-art. All use currentColor for tinting.

const ink = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

// A single reed / makhana water-plant — repeated to build the pond field.
function Reed({ x = 0, h = 12 }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <path d={`M0 0 v-${h}`} />
      <path d={`M0 -${h} l-2.4 -3M0 -${h} l2.4 -3M0 -${h * 0.6} l-2.2 -2.6M0 -${h * 0.6} l2.2 -2.6`} />
      <circle cx="0" cy={-h - 3.4} r="0.9" />
    </g>
  )
}

function ReedField({ count = 22, width = 150, baseY = 0, minH = 6, maxH = 16, seed = 1 }) {
  const reeds = []
  let s = seed * 9301
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  for (let i = 0; i < count; i++) {
    const x = (i / (count - 1)) * width + (rnd() - 0.5) * 4
    const h = minH + rnd() * (maxH - minH)
    reeds.push(<Reed key={i} x={x} h={h} />)
  }
  return <g transform={`translate(0 ${baseY})`}>{reeds}</g>
}

export function Cloud({ className = '', style }) {
  return (
    <svg viewBox="0 0 60 24" className={className} style={style} aria-hidden="true">
      <g {...ink}>
        <path d="M6 18c-4 0-6-6-1-7 0-6 8-8 11-3 3-4 11-3 11 3 5-1 6 6 1 7z" />
      </g>
    </svg>
  )
}

export function Bird({ className = '', style }) {
  return (
    <svg viewBox="0 0 30 14" className={className} style={style} aria-hidden="true">
      <g {...ink}>
        <path d="M2 10c4-6 7-6 11 0M15 10c4-6 7-6 11 0" />
      </g>
    </svg>
  )
}

export function Hill({ className = '', style }) {
  return (
    <svg viewBox="0 0 120 50" className={className} style={style} aria-hidden="true">
      <g {...ink}>
        <path d="M2 46c14-22 26-28 40-6 8-16 20-22 34-4 8-10 16-10 24 0" />
        <path d="M2 46c14-22 26-28 40-6" opacity="0.6" />
      </g>
    </svg>
  )
}

export function PalmTree({ className = '', style }) {
  return (
    <svg viewBox="0 0 60 100" className={className} style={style} aria-hidden="true">
      <g {...ink}>
        <path d="M30 98c-1-22 0-44 1-58" />
        <path d="M31 40c-10-9-22-8-29-3 8-1 17 1 25 7" />
        <path d="M31 40c10-10 23-9 30-3-9-1-18 1-26 8" />
        <path d="M31 40c-4-11-2-23 3-31-1 10 1 21 2 29" />
        <path d="M31 40c8-8 20-10 28-6-9 0-18 4-25 11" />
        <path d="M31 40c-9-5-20-4-27 2 8-1 17 1 24 6" />
      </g>
    </svg>
  )
}

export function FishermenBoat({ className = '', style }) {
  return (
    <svg viewBox="0 0 150 90" className={className} style={style} aria-hidden="true">
      <g {...ink}>
        {/* canoe */}
        <path d="M8 60c18 16 116 16 134 0" />
        <path d="M8 60c6-3 16-4 24-4h84c8 0 18 1 24 4" />
        {/* two seated fishermen */}
        <g transform="translate(46 30)">
          <circle cx="0" cy="0" r="5" />
          <path d="M0 5v14M-7 12l7-5 7 5M-6 26l6-7 6 7" />
        </g>
        <g transform="translate(96 30)">
          <circle cx="0" cy="0" r="5" />
          <path d="M0 5v14M-7 12l7-5 7 5M-6 26l6-7 6 7" />
        </g>
        {/* fishing pole / net line between them */}
        <path d="M40 22 L2 6M104 22 L146 8" />
        {/* ripples */}
        <path d="M2 72c10 5 22 5 32 0M58 76c12 5 26 5 38 0M110 72c10 5 22 5 32 0" opacity="0.7" />
      </g>
    </svg>
  )
}

export function MakhanaBowl({ className = '', style }) {
  return (
    <svg viewBox="0 0 140 110" className={className} style={style} aria-hidden="true">
      <g {...ink} strokeWidth={1.1}>
        {/* heaped fox nuts */}
        {[
          [40, 46, 7], [56, 40, 8], [72, 37, 8], [88, 41, 8], [102, 47, 7],
          [48, 52, 7], [64, 48, 7], [80, 48, 7], [95, 53, 7],
          [56, 58, 6], [72, 56, 6], [86, 59, 6], [64, 63, 5],
        ].map(([cx, cy, r], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={r} />
            <path d={`M${cx - r * 0.4} ${cy - 1}q${r * 0.4} 2 ${r * 0.8} 0`} opacity="0.6" />
          </g>
        ))}
        {/* ornate bowl */}
        <path d="M22 64c4 26 92 26 96 0" />
        <ellipse cx="70" cy="64" rx="48" ry="10" />
        <path d="M22 64c8 4 30 6 48 6s40-2 48-6" opacity="0.5" />
        {/* decorative foot */}
        <path d="M52 88c8 8 28 8 36 0" />
        <path d="M60 92h20" />
      </g>
    </svg>
  )
}

export function Lotus({ className = '', style }) {
  return (
    <svg viewBox="0 0 90 70" className={className} style={style} aria-hidden="true">
      <g {...ink}>
        <path d="M45 62V34" />
        <path d="M45 34c-5 7-14 10-23 10 3-10 14-14 23-14" />
        <path d="M45 34c5 7 14 10 23 10-3-10-14-14-23-14" />
        <path d="M45 30c-3-9-2-18 0-24 2 6 3 15 0 24" />
        <path d="M45 34c-12 2-21 9-26 18 10-2 21-6 26-12" />
        <path d="M45 34c12 2 21 9 26 18-10-2-21-6-26-12" />
        <path d="M6 56c14 5 62 5 76 0" opacity="0.6" />
      </g>
    </svg>
  )
}

// The full landscape band as it appears on the pack — a horizontal scene.
export function PondScene({ className = '', style }) {
  return (
    <svg viewBox="0 0 400 150" className={className} style={style} aria-hidden="true">
      <g {...ink}>
        {/* sky bits */}
        <path d="M60 26c-3 0-5-4-1-5 0-4 6-6 9-2 2-3 8-2 8 2 4-1 5 5 1 5z" opacity="0.7" />
        <path d="M300 20c-3 0-5-4-1-5 0-4 6-6 9-2 2-3 8-2 8 2 4-1 5 5 1 5z" opacity="0.7" />
        <path d="M150 16c3-4 5-4 8 0M162 16c3-4 5-4 8 0" opacity="0.7" />
        {/* rolling hills */}
        <path d="M0 70c40-30 70-34 100-14 24-20 54-22 78 0 22-16 46-16 70 2 26-14 42-10 52 6" opacity="0.8" />
        {/* palms left + right */}
        <g transform="translate(22 24) scale(0.55)">
          <path d="M30 98c-1-22 0-44 1-58" />
          <path d="M31 40c-10-9-22-8-29-3 8-1 17 1 25 7M31 40c10-10 23-9 30-3-9-1-18 1-26 8M31 40c-4-11-2-23 3-31-1 10 1 21 2 29M31 40c8-8 20-10 28-6-9 0-18 4-25 11M31 40c-9-5-20-4-27 2 8-1 17 1 24 6" />
        </g>
        <g transform="translate(330 20) scale(0.6)">
          <path d="M30 98c-1-22 0-44 1-58" />
          <path d="M31 40c-10-9-22-8-29-3 8-1 17 1 25 7M31 40c10-10 23-9 30-3-9-1-18 1-26 8M31 40c-4-11-2-23 3-31-1 10 1 21 2 29M31 40c8-8 20-10 28-6-9 0-18 4-25 11M31 40c-9-5-20-4-27 2 8-1 17 1 24 6" />
        </g>
        {/* fishermen canoe center-left, floating on the water line */}
        <g transform="translate(70 78) scale(0.7)">
          <path d="M8 60c18 16 116 16 134 0M8 60c6-3 16-4 24-4h84c8 0 18 1 24 4" />
          <g transform="translate(46 30)"><circle cx="0" cy="0" r="5" /><path d="M0 5v14M-7 12l7-5 7 5M-6 26l6-7 6 7" /></g>
          <g transform="translate(96 30)"><circle cx="0" cy="0" r="5" /><path d="M0 5v14M-7 12l7-5 7 5M-6 26l6-7 6 7" /></g>
          <path d="M40 22 L2 6M104 22 L146 8" />
        </g>
      </g>
      {/* dense reed / makhana field across the foreground */}
      <g {...ink} strokeWidth={0.9}>
        <ReedField count={34} width={400} baseY={140} minH={8} maxH={22} seed={3} />
        <ReedField count={30} width={400} baseY={148} minH={6} maxH={16} seed={7} />
      </g>
    </svg>
  )
}

// Small standalone fox-nut cluster (for scattering).
export function Makhana({ className = '', style }) {
  return (
    <svg viewBox="0 0 40 44" className={className} style={style} aria-hidden="true">
      <g {...ink} strokeWidth={1.1}>
        <path d="M20 4c-7 6-9 24-3 34 2 4 6 4 8 0 6-10 4-28-5-34z" />
        <path d="M20 6c-2 11-2 24 0 32" opacity="0.6" />
      </g>
    </svg>
  )
}

// Kept for existing imports.
export function Boat(props) {
  return <FishermenBoat {...props} />
}

export function Waves({ className = '', style }) {
  return (
    <svg viewBox="0 0 240 40" className={className} style={style} aria-hidden="true" preserveAspectRatio="none">
      <g {...ink}>
        <path d="M0 12c20-8 40-8 60 0s40 8 60 0 40-8 60 0 40 8 60 0" />
        <path d="M0 26c20-8 40-8 60 0s40 8 60 0 40-8 60 0 40 8 60 0" opacity="0.7" />
      </g>
    </svg>
  )
}

export function Packet({ className = '', style }) {
  return (
    <svg viewBox="0 0 90 120" className={className} style={style} aria-hidden="true">
      <g {...ink} strokeWidth={1.1}>
        <path d="M24 10h42M26 10l3 7M35 10l2 7M45 10v7M55 10l-2 7M63 10l-3 7" />
        <path d="M20 20h50" />
        <path d="M20 20c-2 28-2 62 0 90 4 6 46 6 50 0 2-28 2-62 0-90" />
        <rect x="31" y="46" width="28" height="38" rx="2" />
        <path d="M37 56h16M37 64h16M37 72h11" />
      </g>
    </svg>
  )
}

// Small map-pin doodle for the location tag.
export function MapPin({ className = '', style }) {
  return (
    <svg viewBox="0 0 32 40" className={className} style={style} aria-hidden="true">
      <g {...ink} strokeWidth={1.4}>
        <path d="M16 38C6 26 4 19 4 14a12 12 0 0124 0c0 5-2 12-12 24z" />
        <circle cx="16" cy="14" r="4.5" />
      </g>
    </svg>
  )
}

// Cupped hand cradling a fox nut — the "hand-picked" step.
export function HarvestHand({ className = '', style }) {
  return (
    <svg viewBox="0 0 64 60" className={className} style={style} aria-hidden="true">
      <g {...ink} strokeWidth={1.2}>
        {/* fox nut */}
        <path d="M32 6c-6 5-8 20-3 30 2 3 6 3 8 0 5-10 3-25-5-30z" />
        <path d="M32 8c-2 9-2 20 0 27" opacity="0.6" />
        {/* cupped palm */}
        <path d="M10 36c8 14 36 14 44 0" />
        <path d="M10 36c-3-1-6 1-5 5M54 36c3-1 6 1 5 5" />
      </g>
    </svg>
  )
}

// Small roasting-pan with heat wisps — the "slow roasted" step.
export function RoastPan({ className = '', style }) {
  return (
    <svg viewBox="0 0 64 56" className={className} style={style} aria-hidden="true">
      <g {...ink} strokeWidth={1.2}>
        <path d="M12 34c2 12 38 12 40 0" />
        <ellipse cx="32" cy="34" rx="20" ry="5" />
        <path d="M52 34h9" />
        <path d="M24 22c-3-4 1-7-1-11M32 20c-3-4 1-7-1-11M40 22c-3-4 1-7-1-11" opacity="0.7" />
      </g>
    </svg>
  )
}
