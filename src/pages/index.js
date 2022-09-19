import * as React from "react"
import { AboutUs, LayoutHome} from "../components"

export default function Homepage() {

  return (
    <LayoutHome title='Home Page'>
     <AboutUs />
    </LayoutHome>
  )
}
