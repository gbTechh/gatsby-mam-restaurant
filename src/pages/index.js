import * as React from "react"
import { AboutUs, Chef, Intro, LayoutHome, Menu, SpecialDrinks, Laurels, Gallery, Contact, Footer } from "../components"

export default function Homepage() {

  return (
    <LayoutHome title='Home Page'>
      <AboutUs />
      <Menu />
      <SpecialDrinks />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Contact />
      <Footer />
    </LayoutHome>
  )
}
