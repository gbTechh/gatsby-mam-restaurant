import React, { useLayoutEffect, useRef, useState } from "react"
import Slider from "react-slick"
import { Button } from "../../ui"
import { CardSlider } from "../CardSlider"

import "./sliderCss.css"

export const SliderCss = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1804,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 1604,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "60px",
        },
      },
    ],
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images &&
          images.map((e, i) => (
            <CardSlider
              key={e.title + `${i}`}
              title={e.name}
              image={e.menuTaxonomy.image}
              description={e.description}
            ></CardSlider>
          ))}
      </Slider>
    </div>
  )
}
