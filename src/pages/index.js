import * as React from "react"
import  {LayoutHome} from "../components/Layouts/LayoutHome.jsx"
import Header from "../components/molecules/Header/Header.jsx"



export default function Homepage() {

  return (
    <LayoutHome title='Home Page'> 
      <Header/>
    </LayoutHome>
  )
}
