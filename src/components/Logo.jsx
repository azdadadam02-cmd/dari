// Logo dyal dari: dar k7la b cheminée, l "d" byed lda5el, w "ari" mn b3d.
// L'couleurs katbdlo b CSS (.logo) bach ykhdem 3la fond beige w 3la fond k7el.
export default function Logo() {
  return (
    <svg viewBox="0 0 345 185" role="img" aria-label="dari">
      <g className="logo-dar">
        <rect x="18" y="18" width="32" height="60" />
        <polygon points="0,87 92,0 188,87" />
        {/* l7it limen f 176: bin "d" (katsali f 177) w "a" */}
        <rect x="8" y="85" width="168" height="100" />
      </g>
      <text x="92" y="183" fontSize="130" fontWeight="700">
        <tspan className="logo-d">d</tspan>
        <tspan className="logo-ari">ari</tspan>
      </text>
    </svg>
  )
}
