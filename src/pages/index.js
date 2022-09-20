import * as React from "react"
import { AboutUs, Chef, LayoutHome, Menu } from "../components"

export default function Homepage() {

  return (
    <LayoutHome title='Home Page'>
      <AboutUs />
      <Menu />
      <Chef />
    </LayoutHome>
  )
}
