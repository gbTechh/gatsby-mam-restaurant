import React from "react"
import { useState } from "react"
import { CardSlider } from "../CardSlider"

import "./sliderCss.css"

export const SliderCss = ({ images }) => {
  return (
    <div className="sliderCss">
      {images &&
        images.map((e, i) => (
          <CardSlider
            key={e.title + `${i}`}
            title={e.name}
            image={e.menuTaxonomy.image}
            description={e.description}
          ></CardSlider>
        ))}
    </div>
  )
}
