import React from "react"
import "./button.css"

export const Buttons = React.forwardRef(({ children, ...props }, ref) => {
  return <button ref={ref}>{children}</button>
})
