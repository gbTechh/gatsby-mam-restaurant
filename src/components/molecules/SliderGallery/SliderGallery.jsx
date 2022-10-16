import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"

import "./sliderGalleryCss.css"

export const SliderGallery = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1740,
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
          images.map((img, i) => (
            <div className="slider-card" key={img.id}>
              <GatsbyImage
                image={getImage(img.gatsbyImage)}
                style={{
                  minHeight: "350px",
                  height: "100%",
                  border: "5px solid black",
                }}
                alt="image-food"
              />
            </div>
          ))}
      </Slider>
    </div>
  )
}
