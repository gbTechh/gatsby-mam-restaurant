import React from "react"
import { Container } from "../../ui"

export const Header = ({ children, ...props }) => {
  return (
    <Container fluid pd="0" className="header">
      {children}
    </Container>
  )
}
