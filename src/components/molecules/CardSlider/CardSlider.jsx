import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"
import { Text } from "../../ui"

import "./cardSlider.css"

export const CardSlider = React.forwardRef(
  ({ image, title, description }, ref) => {
    return (
      <div className="card-slider" ref={ref}>
        <div className="card-slider__head">
          <GatsbyImage
            image={getImage(image)}
            style={{
              boxShadow: "1px 1px rgba(0,0,0,0.2)",
              borderRadius: "20px",
              border: "5px solid var(--color-secondary-1)",
            }}
            imgStyle={{ objectFit: "contain" }}
            alt="title"
          />
        </div>
        <div className="card-slider__body">
          <Text fw="strong" color="secondary1" align="left">
            {title}
          </Text>
          <Text size="small" color="secondary2" align="left">
            {description}
          </Text>
        </div>
      </div>
    )
  }
)
