import * as React from "react"
import { AboutUs, Chef, Intro, LayoutHome, Menu, SpecialDrinks,Laurels  } from "../components"

export default function Homepage() {

  return (
    <LayoutHome title='Home Page'>
      <AboutUs />
      <Menu />
      <SpecialDrinks/>
      <Chef />
      <Intro />
      <Laurels />
    </LayoutHome>
  )
}
