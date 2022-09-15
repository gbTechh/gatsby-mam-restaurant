import React from "react"
import { useGetDataHeader } from "../../../hooks"

import { Container } from "../../ui"

import "./header.css"

export const HeaderParallax = ({ children, ...props }) => {
  const { titleTextHeader, subtitleTextHeader, shortDescriptionHeader } =
    useGetDataHeader()
  return (
    <Container fluid pd="0" className="header">
      {children}
    </Container>
  )
}
