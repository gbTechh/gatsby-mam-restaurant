import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"
import { Text } from "../../ui"

import "./cardSlider.css"

export const CardSlider = ({ image, title, description }) => {
  return (
    <div className="card-slider">
      <div className="card-slider__head">
        <GatsbyImage
          image={getImage(image)}
          style={{
            boxShadow: "1px 1px rgba(0,0,0,0.2)",
            borderRadius: "50%",
            border: "5px solid var(--color-secondary-1)",
          }}
          imgStyle={{ objectFit: "contain" }}
          alt="title"
        />
      </div>
      <div className="card-slider__body">
        <Text fw="strong" color="secondary1">
          {title}
        </Text>
        <Text size="small" color="secondary2">
          {description}
        </Text>
      </div>
    </div>
  )
}
