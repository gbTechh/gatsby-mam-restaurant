import * as React from "react"

export const MenuBurguer = ({ w, h, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={w || 29}
    height={h || 27}
    {...props}
  >
    <rect y={11} width={24} height={2} rx={1} />
    <rect y={4} width={24} height={2} rx={1} />
    <rect y={18} width={24} height={2} rx={1} />
  </svg>
)
