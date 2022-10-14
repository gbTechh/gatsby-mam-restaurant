import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"
import { Container, Text } from "../../ui"

import "./cartmenu.css"

export const CartMenu = ({ children }, ref) => {
  return (
    <Container className="cartmenu">
      <div className="cartmenu-wrapper">{children}</div>
    </Container>
  )
}
