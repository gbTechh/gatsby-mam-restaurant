import * as React from "react"
import { AboutUs, Chef, LayoutHome, Menu, SpecialDrinks } from "../components"

export default function Homepage() {

  return (
    <LayoutHome title='Home Page'>
      <AboutUs />
      <Menu />
      <SpecialDrinks/>
      <Chef />
    </LayoutHome>
  )
}
